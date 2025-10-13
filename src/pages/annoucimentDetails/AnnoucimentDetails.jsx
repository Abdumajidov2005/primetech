import React, { useEffect, useState } from "react";
import "./AnnoucimentDetails.css";
import { getAnnouncementId } from "../services/api";
import { useParams } from "react-router-dom";

function AnnoucimentDetails() {
  const { id } = useParams();
  const [annoucimentId, setAnnoucimentId] = useState(null);

  const [loaderAnnc, setLoaderAnnc] = useState(false);

  useEffect(() => {
    setLoaderAnnc(true);
    getAnnouncementId(id)
      ?.then(setAnnoucimentId)
      .finally(() => {
        setLoaderAnnc(false);
      });
  }, [id]);

  return (
    <>
      <div className="annouciment-Id">
        <div className="container">
          {loaderAnnc ? (
            <div className="annoucimentLoading">
              <div className="loadingss darkener"></div>
              <div className="loadingss darkener"></div>
              <div className="loadingss darkener"></div>
              <div className="loadingss darkener"></div>
              <div className="loadingss darkener"></div>
              <div className="loadingss darkener"></div>
              <div className="loadingss darkener"></div>
              <div className="loadingss darkener"></div>
            </div>
          ) : (
            <div
              className="boxelement"
              dangerouslySetInnerHTML={{
                __html: annoucimentId?.description || "",
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default AnnoucimentDetails;
