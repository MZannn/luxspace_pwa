function Modal({handleShowModal}) {
  return (
    <>
      <div
        className="fixed inset-0 z-40 flex items-center justify-center w-100  min-h-screen"
        onClick={handleShowModal}
      >
        <div className="fixed inset-0 bg-black opacity-30"></div>
        <div className="bg-white p-0 md:p-6 z-10">
          <div className="w-screen max-w-md mx-auto relative z-50">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full aspect-video"
                title="Video"
                src="https://www.youtube.com/embed/3h0_v1cdUIA"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
