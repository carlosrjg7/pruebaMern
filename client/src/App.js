import React, {Fragment, useState} from 'react';

function App() {

  const [file, setFile] = useState(null)

  const selectedHandler = e =>{
    setFile(e.target.files[0])
  }

  const sendHandler = () =>{
    if(!file){
      alert('debes seleccionar un archivosaaa')
      return
    }   

    const formdata = new FormData()
    formdata.append('image', file)

    fetch('http://localhost:9000/api/image/post', {
      method: 'POST',
      mode: 'no-cors',
      body: formdata
    })
    .then(res => res.text())
    .then(res => console.log(res))
    .catch(err => {
      console.error(err)
    })

    setFile(null)

    document.getElementById('fileInput').value = null
  
  }


 
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a href="#!" className="navbar-brand">Image App</a>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="card p-3">
          <div className="row">
            <div className="col-10">
              <input id="fileInput" onChange={selectedHandler} type="file" className="form-control"/>
            </div>
            <div className="col-2">
              <button onClick={sendHandler} type="button" className="btn btn-primary col-12">upload</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
