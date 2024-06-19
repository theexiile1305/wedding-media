'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import LoadingDots from './loading-dots';
import DragActiveIcon from '@/app/dragActiveIcon';
import toast from 'react-hot-toast';

const Uploader = () => {
  const [fileList, setFileList] = useState<FileList>();
  const [numberOfFiles, setNumberOfFiles] = useState(0);
  const [dragActive, setDragActive] = useState(false);
  const [saving, setSaving] = useState(false);

  const onChangePicture = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files && event.currentTarget.files;
    if (files) {
      setFileList(files);
      setNumberOfFiles(files.length);
    }
  };

  const onDragOverEvent = (event: React.DragEvent<HTMLDivElement>) =>
    handleDragEvent(event, true);

  const onDragEnterEvent = (event: React.DragEvent<HTMLDivElement>) =>
    handleDragEvent(event, true);

  const onDragLeaveEvent = (event: React.DragEvent<HTMLDivElement>) =>
    handleDragEvent(event, false);

  const onDropDragEvent = (event: React.DragEvent<HTMLDivElement>) => {
    const files = event.dataTransfer.files;
    handleDragEvent(event, false);
    setFileList(files);
    setNumberOfFiles(files.length);
  };

  const handleDragEvent = (
    event: React.DragEvent<HTMLDivElement>,
    dragActive: boolean,
  ) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(dragActive);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSaving(true);
    const files = fileList!!;
    for (let i = 0; i < files.length; i++) {
      const body = await files[i].text();
      fetch('/api/file', {
        method: 'POST',
        headers: {
          'content-type': files[i].type,
          'file-ending': files[i].name.split('.')[1],
        },
        body: body,
      })
        .then((res) => {
          if (res.status !== 200) throw Error('Could not upload file');
          toast('Successfully uploaded media.');
        })
        .catch((err) => {
          toast('Could not upload file');
        })
        .finally(() => {
          setSaving(false);
        });
    }
  };

  return (
    <form className="grid gap-6" onSubmit={handleSubmit}>
      <div>
        <div className="space-y-1 mb-4">
          <h2 className="text-xl font-semibold">Upload your wedding media</h2>
          <p className="text-sm text-gray-500">Many thanks in advance!</p>
        </div>
        <label
          htmlFor="image-upload"
          className="group relative mt-2 flex h-72 cursor-pointer flex-col items-center justify-center rounded-md border border-gray-300 bg-white shadow-sm transition-all hover:bg-gray-50"
        >
          <div
            className="absolute z-[5] h-full w-full rounded-md"
            onDragOver={(event) => onDragOverEvent(event)}
            onDragEnter={(event) => onDragEnterEvent(event)}
            onDragLeave={(event) => onDragLeaveEvent(event)}
            onDrop={(event) => onDropDragEvent(event)}
          />
          <div
            className={`${dragActive ? 'border-2 border-black' : ''} absolute z-[3] flex h-full w-full flex-col items-center justify-center rounded-md px-10 transition-all bg-white opacity-100 hover:bg-gray-50`}
          >
            <DragActiveIcon dragActive={dragActive} />
            <p className="mt-2 text-center text-sm text-gray-500">
              Drag and drop or click to upload.
            </p>
            <p className="mt-2 text-center text-sm text-black-500">
              Currently there are {numberOfFiles} files selected.
            </p>
            <span className="sr-only">Media Upload</span>
          </div>
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <input
            id="image-upload"
            name="image"
            type="file"
            multiple
            className="sr-only"
            onChange={onChangePicture}
          />
        </div>
      </div>
      <button
        disabled={fileList === undefined}
        className={`${fileList === undefined ? 'cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400' : 'border-black bg-black text-white hover:bg-white hover:text-black'} flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
      >
        {saving ? (
          <LoadingDots color="#808080" />
        ) : (
          <p className="text-sm">Confirm</p>
        )}
      </button>
    </form>
  );
};

export default Uploader;
