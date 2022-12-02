import { Record } from "pocketbase";
// import React, { useState } from "react";
// import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Client, getFileDownloadPath } from "../utils";

function DownloadPage() {
  const { id } = useParams();

  const [record, setRecord] = useState<Record>();

  useEffect(() => {
    if (id) {
      Client.collection("test")
        .getOne(id)
        .then((record) => {
          setRecord(record);
        });
    }
  }, [id]);
  return (
    <div>
      {!!record && (
        <a download href={getFileDownloadPath(record)}>
          lele lowde
        </a>
      )}
    </div>
  );
}

export default DownloadPage;
