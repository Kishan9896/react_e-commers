import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Form, Formik, useFormik } from "formik";
import * as yup from "yup";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import DialogContentText from "@mui/material/DialogContentText";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { idID } from "@mui/material/locale";
import { AddProducts, DeleteProducts, UpdateProducts, ReadProduct } from "../../Redux/Action/admin.action";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Admin(props) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [rowData, setRowdata] = useState(null);
  const [edit, setEdit] = useState(false);
  const [search, setSearch] = useState([]);

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    formikOrg.resetForm();
  };

  let schema = yup.object().shape({
    name: yup.string().required("Please Enter Product Name."),
    Brandname: yup.string().required("Please Enter Brand Name."),
    price: yup.number().required("Please Enter Price."),
    quntity: yup.number().required("Please Enter Quntity."),
    catagory: yup.string().required("Please Enter catagory."),
    Prof_img: yup.mixed().required("please select profile picture."),
  });

  const inserthandle = (values) => {
    const id = Math.floor(Math.random() * 1000);

    const dataIn = {
      id: id,
      ...values,
    };

    dispatch(AddProducts(values));

    handleClose();
    local();
  };

  const dataEdit = (values) => {
    dispatch(UpdateProducts(values));

    handleClose();
    local();
    setEdit(false);
  };

  const formikOrg = useFormik({
    initialValues: {
      name: "",
      Brandname: "",
      price: "",
      quntity: "",
      catagory: "",
      Prof_img: "",
    },
    validationSchema: schema,
    onSubmit: (values, action) => {
      if (edit) {
        dataEdit(values);
      } else {
        inserthandle(values);
      }
      action.resetForm();
    },
  });

  const Delete = () => {
    dispatch(DeleteProducts(rowData));
    setDeleteAlert(false);
  };

  const handleDeleteAlertOpen = (params) => {
    setDeleteAlert(true);
    setRowdata(params);
  };

  const handleDeleteAlertClose = () => {
    setDeleteAlert(false);
  };

  const handleEdit = (params) => {
    setOpen(true);

    setEdit(true);
    formikOrg.setValues(params.row);
  };

  const columns = [
    { field: "name", headerName: "Product Name", width: 130 },
    { field: "Brandname", headerName: "Brand Name", width: 130 },
    { field: "price", headerName: "price", width: 130 },
    { field: "catagory", headerName: "catagory", width: 130 },
    { field: "quntity", headerName: "Quntity", width: 130 },
    {
      field: "Prof_img",
      headerName: "Profile Image",
      width: 130,
      renderCell: (params) => (
        <img src={params.row.Prof_img} width={50} height={50} />
      ),
    },
    {
      field: "Action",
      headerName: "Action",
      width: 130,
      renderCell: (params) => (
        <>
          <IconButton aria-label="edit" onClick={() => handleEdit(params)}>
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => handleDeleteAlertOpen(params.row)}
          >
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  const local = () => {
    const Datahandle = JSON.parse(localStorage.getItem("product"));

    if (Datahandle !== null) {
      setData(Datahandle);
    }
  };

  const handleSearch = (value) => {
    // const localSearch = JSON.parse(localStorage.getItem("product"));

    const filterData = product.product.filter(
      (a) =>
        a.name.toLowerCase().includes(value) ||
        a.Brandname.toString().includes(value) ||
        a.catagory.toString().includes(value) ||
        a.price.toString().includes(value) ||
        a.quntity.toString().includes(value)
    );
    setSearch(filterData);
    console.log(filterData);
  };

  const product = useSelector((state) => state.products);
  const Sdata = search.length > 0 ? search : product.product;

  useEffect(() => {
    // local();
    dispatch(ReadProduct());
  }, []);

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    setFieldValue,
  } = formikOrg;

  return (
    <div>
        <div>
          <div>
            <Button variant="outlined" onClick={handleClickOpen}>
              Add Product
            </Button>
            <TextField
              margin="dense"
              name="name"
              label="Product Search"
              type="text"
              fullWidth
              variant="standard"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={Sdata}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
              />
            </div>

            <Dialog fullWidth open={open} onClose={handleClose}>
              <DialogTitle>Admin Panel</DialogTitle>
              <Formik values={formikOrg}>
                <Form onSubmit={handleSubmit}>
                  <DialogContent>
                    <TextField
                      value={values.name}
                      margin="dense"
                      name="name"
                      label="Product Name"
                      type="text"
                      fullWidth
                      variant="standard"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p>{errors.name && touched.name ? errors.name : ""}</p>
                    <TextField
                      value={values.Brandname}
                      margin="dense"
                      name="Brandname"
                      label="Brand Name"
                      type="text"
                      fullWidth
                      variant="standard"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p>{errors.Brandname && touched.Brandname ? errors.Brandname : ""}</p>
                    <TextField
                      value={values.catagory}
                      margin="dense"
                      name="catagory"
                      label="catagory"
                      type="text"
                      fullWidth
                      variant="standard"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p>{errors.catagory && touched.catagory ? errors.catagory : ""}</p>
                    <TextField
                      value={values.price}
                      margin="dense"
                      name="price"
                      label="Price"
                      type="number"
                      fullWidth
                      variant="standard"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p>{errors.price && touched.price ? errors.price : ""}</p>
                    <TextField
                      value={values.quntity}
                      margin="dense"
                      name="quntity"
                      label="Quntity"
                      type="number"
                      fullWidth
                      variant="standard"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p>
                      {errors.quntity && touched.quntity ? errors.quntity : ""}
                    </p>
                    <input
                      name="Prof_img"
                      type="file"
                      onChange={(e) =>
                        setFieldValue("Prof_img", e.target.files[0])
                      }
                    />
                    <p>
                      {errors.Prof_img && touched.Prof_img
                        ? errors.Prof_img
                        : ""}
                    </p>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    {edit ? (
                      <Button type="submit">Update</Button>
                    ) : (
                      <Button type="submit">submit</Button>
                    )}
                  </DialogActions>
                </Form>
              </Formik>
            </Dialog>
          </div>
          <Dialog
            open={deleteAlert}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleDeleteAlertClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Are you want to sure Delete?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDeleteAlertClose}>No</Button>
              <Button onClick={Delete}>Yes</Button>
            </DialogActions>
          </Dialog>
        </div>
    </div>
  );
}

export default Admin;
