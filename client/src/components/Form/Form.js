import React, {useState} from 'react';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles';
 
const Form = () =>{
    const [postData, setPostData] = useState({creator: '', title: '', message: '', firmantes: '', selectedFile: ''})

    const classes = useStyles();

    const handleSubmit = () => {

    }

    const clear = () =>{

    }

    return(
        <Paper className= {classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
            <Typography variant="h5">Crear Evento Documento </Typography>
            <TextField  name="creator"  variant="outlined"  label="Creador" fullWidth  value={postData.creator}onChange={(e) => setPostData({...postData, creator: e.target.value})} />
            <TextField  name="title"  variant="outlined"  label="Titulo" fullWidth  value={postData.title}onChange={(e) => setPostData({...postData, title: e.target.value})} />
            <TextField  name="message"  variant="outlined"  label="Mensaje" fullWidth  value={postData.message}onChange={(e) => setPostData({...postData, message: e.target.value})} />
            <TextField  name="firmantes"  variant="outlined"  label="Firmantes" fullWidth  value={postData.firmantes}onChange={(e) => setPostData({...postData, firmantes: e.target.value})} />
            <div className={classes.fileInput}> <FileBase> type="file" multiple={false} onDone={({base64})=> setPostData({...postData, selectedFile: base64})} </FileBase> </div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Siguiente</Button>
            <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Borrar</Button>
            </form>

        </Paper>
    );
}
export default Form;