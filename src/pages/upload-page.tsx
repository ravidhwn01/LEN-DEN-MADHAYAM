import { ListResult, Record } from "pocketbase";
import _ from 'lodash'
import React, { FormEvent, FormEventHandler, useEffect, useRef, useState } from "react";
import { Client, getFileDownloadPath, ServerUrl, WebAppUrl } from "../utils";

function UploadPage() {
  const [record, setRecord] = useState<Record>();
  const fileRef = useRef<HTMLInputElement>(null);
  const [allFiles, setAllFiles] = useState<ListResult<Record>>();
  useEffect(() => {
    Client.collection("test")
      .getList(4,3)
      .then((records) => {
        setAllFiles(records);
      });
  }, []);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const file = fileRef.current?.files?.[0];  // take first file from file array
    const formData = new FormData();
    console.log(formData);
        if(file!==undefined){
            formData.append("file",file);
            const res = await Client.collection("test").create(formData);
            setRecord(res)
            console.log(res)
        } else{
            alert("lode file daal! 😆")
        }

  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={fileRef} type="file" name="file" />
        <button type="submit"> daal file</button>
      </form>
      {
        !!record && (
            <a href={`${WebAppUrl}/${record.id}`}> {`${WebAppUrl}/${record.id}`} </a>
        )
        // !!record && (
        //     <a href={getFileDownloadPath(record)}> download file </a>
        // )
      }
         <ul>
        {allFiles &&
          _.map(allFiles.items, (fileRecord) => {
            return (
              <li>
                <a href={getFileDownloadPath(fileRecord)}>
                  Download The File {fileRecord.file}
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default UploadPage;
