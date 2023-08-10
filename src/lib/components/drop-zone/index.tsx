import { useState } from 'react'
// TODO: remove all any types here

export const FileDropZone = (): JSX.Element => {
  const [droppedFiles, setDroppedFiles] = useState<any>([])
  const isEmpty = droppedFiles.length === 0

  const handleDrop = (e: any): void => {
    e.preventDefault()
    const newFiles = Array.from(e.dataTransfer.files)
    console.log(newFiles)
    setDroppedFiles(newFiles)
  }

  const handleDragOver = (e: any): void => {
    e.preventDefault()
  }

  const handleOpenFileExplorer = (): void => {
    const fileExplorer = document.createElement('input')
    fileExplorer.setAttribute('type', 'file')
    fileExplorer.setAttribute('multiple', 'true')
    fileExplorer.setAttribute('accept', '.jpg, .jpeg, .png')
    fileExplorer.addEventListener('change', (e: any) => {
      const newFiles = Array.from(e.target.files)
      setDroppedFiles(newFiles)
    })
    fileExplorer.click()
  }

  const handleUploadFile = (): void => {
    console.log('uploading file')
  }

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="w-72 h-80 border-2 border-dashed border-gray-300 rounded-2xl text-center flex flex-col justify-between items-center cursor-default"
    >
      <div className={`h-full flex flex-col items-center ${isEmpty ? 'justify-center' : 'justify-end'} `}>
        <p>
          Drag and drop files here <br />
          or
        </p>
        <button
          className="bg-transparent hover:bg-gray-300 text-gray-400 hover:text-white py-1 px-2 border border-gray-400 hover:border-transparent rounded"
          onClick={handleOpenFileExplorer}
        >
          Click to select files
        </button>
      </div>

      {!isEmpty && (
        <div className="flex flex-col justify-center items-center  mt-3">
          <ul className="pt-5">
            {droppedFiles.map((file: any, index: any) => (
              <li key={index}>
                {file.name}{' '}
                <span className="text-[10px] text-red-500 border border-red-500 px-1 py-0.5 rounded-full cursor-pointer">
                  X
                </span>
              </li>
            ))}
          </ul>
          <button
            className="my-[0.35rem] text-xs text-blue-500 rounded-md  underline underline-offset-4 px-3 py-1"
            onClick={handleUploadFile}
          >
            Upload
          </button>
        </div>
      )}
    </div>
  )
}

export default FileDropZone
