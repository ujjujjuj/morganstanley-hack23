import { useEffect, useState } from "react"
import { BiScan } from "react-icons/bi"
import { toast } from "react-toastify"
import { FaTimes } from "react-icons/fa"
import { useZxing } from "react-zxing"
import useUser from "../../hooks/useUser"

const QrScanner = () => {
  const [activateReader, setActivateReader] = useState(false)
  const { user } = useUser()

  useEffect(() => {
    if (activateReader) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          stream.getTracks().forEach(function (track) {
            track.stop()
          })
        })
        .catch((e) => {
          setActivateReader(false)
          toast.error("Camera permission denied")
        })
    }
  }, [activateReader])

  return (
    <>
      <div
        className="mr-4 text-3xl cursor-pointer"
        onClick={() => setActivateReader(true)}
      >
        <BiScan />
      </div>
      {activateReader ? (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-[100] p-4 flex items-center justify-center"
          style={{ margin: 0 }}
        >
          <QrReader
            onResult={(result) => {
              const toastId = toast.loading("Processing")

              fetch(
                `${import.meta.env.VITE_SERVER_ADDRESS}/events/markAttendance`,
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    eventId: result.text,
                    userId: user._id,
                  }),
                }
              )
                .then((res) => res.json())
                .then((data) => {
                  console.log(data)
                  toast.update(toastId, {
                    render: data.message,
                    type: toast.TYPE.SUCCESS,
                    autoClose: 3000,
                    isLoading: false,
                  })
                })
                .catch((e) => {
                  console.log(e)
                  toast.update(toastId, {
                    render: "An Unknown error occured",
                    type: toast.TYPE.ERROR,
                    autoClose: 3000,
                    isLoading: false,
                  })
                })
              setActivateReader(false)
            }}
            className="w-full max-w-md aspect-square"
          />
          <div
            className="fixed top-6 right-6 text-4xl text-white cursor-pointer"
            onClick={() => setActivateReader(false)}
          >
            <FaTimes />
          </div>
        </div>
      ) : null}
    </>
  )
}

const QrReader = ({ onResult, ...other }) => {
  const { ref } = useZxing({ onResult })

  return (
    <div {...other}>
      <video ref={ref} />
    </div>
  )
}

export default QrScanner
