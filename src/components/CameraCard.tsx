import { Button, Card, CardActions, CardMedia } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const CameraCard = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const photoRef = useRef<HTMLCanvasElement>(null);
  const [displayPhoto, setDisplayPhoto] = useState<boolean>(false);

  const openCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });

    let video = videoRef.current!;
    video.srcObject = stream;
    video.play();
  };

  const takePhoto = () => {
    const video = videoRef.current!;
    const photo = photoRef.current!;

    const width = video.videoWidth;
    const height = video.videoHeight;

    photo.width = width;
    photo.height = height;

    const ctx = photo.getContext("2d");
    ctx?.drawImage(video, 0, 0, width, height);
    setDisplayPhoto(true);
  };

  const retakePhoto = () => {
    const photo = photoRef.current!;
    const ctx = photo.getContext("2d");
    ctx?.clearRect(0, 0, photo.width, photo.height);
    setDisplayPhoto(false);
  };

  useEffect(() => {
    const video = videoRef.current;
    const photo = photoRef.current;
    if (!video || !photo) {
      return;
    }

    if (displayPhoto) {
      photo.hidden = false;
      video.hidden = true;
    } else {
      photo.hidden = true;
      video.hidden = false;
      openCamera();
    }
  }, [videoRef, displayPhoto]);

  return (
    <Card>
      <CardMedia>
        <canvas ref={photoRef} hidden style={{ maxWidth: "100%" }}></canvas>
        <video ref={videoRef} style={{ maxWidth: "100%" }}></video>
      </CardMedia>
      <CardActions>
        {displayPhoto ? (
          <Button
            color="primary"
            variant="outlined"
            size="small"
            onClick={retakePhoto}
          >
            重拍
          </Button>
        ) : (
          <Button
            color="secondary"
            variant="outlined"
            size="small"
            onClick={takePhoto}
          >
            拍照
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default CameraCard;
