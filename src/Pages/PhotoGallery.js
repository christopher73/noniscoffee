import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../data/photos";

function PhotoGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    let x = document.getElementById("headerNav");

    x.hidden = true;
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    let y = document.getElementById("headerNav");

    y.hidden = false;
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="container text-center my-4 py-4" id="photoGallery">
      <div className="row">
        <div className="col-sm-12 col-md-8 col-12 m-auto">
          {" "}
          <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal
                showCloseButton={false}
                isFullscreen={false}
                onClose={closeLightbox}
              >
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    src: x.src,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </div>
    </div>
  );
}
export default PhotoGallery;
