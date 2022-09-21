import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { resetAlert } from "../../Redux/Action/alert.action";

function Alert(props) {
  const alert = useSelector((state) => state.text);
  const { enqueueSnackbar } = useSnackbar();

  console.log(alert);

  const dispatch = useDispatch();

  useEffect(() => {
    if (alert.text !== "") {
      enqueueSnackbar(alert.text, {
        variant: alert.color,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
    }

    setTimeout(() => {
      dispatch(resetAlert());
    }, 2000);
  }, [alert.text]);
  return( <div></div>);
}

export default Alert;