import { NFTStorage, File, Blob } from 'nft.storage'
import { ALLOWED_EXTENSIONS } from '../../const/extensions'
import { useState, DragEvent } from 'react'
import { BaseRemoveFileButton } from '../utils/BaseRemoveFileButton'
import { NFT_STORAGE_TOKEN } from '../../const/values'

export const FileDropZone = (): JSX.Element => {
  const [droppedFile, setDroppedFile] = useState<File>()
  const isEmpty = droppedFile?.length === 0

  const handleDrop = (event: DragEvent<HTMLInputElement>): void => {
    event.preventDefault()
    const dataTransfer = event.dataTransfer
    if (dataTransfer && dataTransfer.files) {
      setDroppedFile(dataTransfer.files[0])
    }
  }

  const handleDragOver = (event: DragEvent): void => {
    event.preventDefault()
  }

  const handleOpenFileExplorer = (): void => {
    const fileExplorer = document.createElement('input')
    fileExplorer.setAttribute('type', 'file')
    fileExplorer.setAttribute('multiple', 'true')
    fileExplorer.setAttribute('accept', ALLOWED_EXTENSIONS)
    fileExplorer.addEventListener('change', (event: Event) => {
      const inputElement = event.target as HTMLInputElement
      if (inputElement.files) {
        setDroppedFile(inputElement.files[0])
      }
    })
    fileExplorer.click()
  }

  const handleUploadFile = async (): Promise<void> => {
    const client = new NFTStorage({ token: NFT_STORAGE_TOKEN })
    const fileReader = new FileReader()
    if (droppedFile) {
      fileReader.readAsArrayBuffer(droppedFile)
      fileReader.onloadend = async () => {
        const fileBlob = new Blob([fileReader.result!])
        const fileCid = await client.storeBlob(fileBlob)
        console.log('fileCid', fileCid)

        const metadata = {
          metadata: {
            file: fileCid,
          },
        }

        const data = new Blob([JSON.stringify(metadata)])
        const { car } = await NFTStorage.encodeBlob(data)
        const cid = await client.storeCar(car)
        console.log('cid', cid)
      }
    } else {
      console.error('Dropped file is undefined or null.')
    }
  }

  const handleRemoveFile = (): void => {
    setDroppedFile(undefined)
  }

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="w-72 h-80 border-2 border-dashed border-gray-300 rounded-2xl text-center flex flex-col justify-between items-center cursor-default"
    >
      <div className={`h-full flex flex-col items-center ${isEmpty ? 'justify-center' : 'justify-end'}`}>
        <p>
          Drag and drop file here <br />
          or
        </p>
        <button
          className="bg-transparent hover:bg-gray-300 text-gray-400 hover:text-white py-1 px-2 border border-gray-400 hover:border-transparent rounded"
          onClick={handleOpenFileExplorer}
        >
          Click to select file
        </button>
      </div>

      {!isEmpty && (
        <div className="flex flex-col justify-center items-center  mt-3">
          <ul className="pt-5">
            <li>
              {droppedFile ? (
                <>
                  {droppedFile.name} <BaseRemoveFileButton handleRemoveFile={handleRemoveFile} />
                </>
              ) : (
                'No file selected'
              )}
            </li>
          </ul>
          <button
            className="my-[0.35rem] text-xs text-blue-500 rounded-md underline underline-offset-4 px-3 py-1"
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
