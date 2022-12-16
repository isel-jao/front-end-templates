import { useState, useEffect } from "react";
import Modal from "../../components/modal";
import Button from "../../components/button";

interface Props {
  title?: string;
  message?: string;
}

function useAffirm({
  title = "Are you sure?",
  message = "This action cannot be undone",
}: Props): [(callback: () => void) => void, () => JSX.Element] {
  const [open, setOpen] = useState(false);
  const [onAffirm, setOnAffirm] = useState<() => void>(() => () => {});

  const handleAffirm = () => {
    onAffirm();
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const affirm = (callback: () => void) => {
    setOnAffirm(() => callback);
    setOpen(true);
  };

  useEffect(() => {
    if (!open) {
      setOnAffirm(() => () => {});
    }
  }, [open]);

  const AffirmModal = () => {
    return (
      <Modal open={open}>
        <div
          style={{
            padding: "2em",
            display: "flex",
            flexDirection: "column",
            gap: "1em",
          }}
        >
          <h1>{title}</h1>
          <p>{message}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              onClick={() => {
                handleAffirm();
              }}
            >
              Yes
            </Button>
            <Button
              onClick={() => {
                handleCancel();
              }}
            >
              No
            </Button>
          </div>
        </div>
      </Modal>
    );
  };

  return [affirm, AffirmModal];
}

export default useAffirm;
