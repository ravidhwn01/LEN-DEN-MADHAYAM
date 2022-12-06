import { Record } from "pocketbase";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFileDownloadPath, client } from "../utils/index";

 const DownloadFilePage = () => {
  const { id } = useParams();
  const [record, setRecord] = useState<Record>();

  useEffect(() => {
    if (id) {
      client.collection("test")
        .getOne(id)
        .then((record) => {
          setRecord(record);
        });
    }
  }, [id]);

  return (
    <div>
      <h2>Download file</h2>
      {!!record && (
        <h1>
          <a download href={getFileDownloadPath(record)}>
            Download File
          </a>
        </h1>
      )}
    </div>
  );
};export default DownloadFilePage