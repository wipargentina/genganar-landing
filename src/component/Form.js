import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      phone: '',
      country: '',
      location: '',
      policy: '',
      isSending: false,
      isSended: false,
      isError: false,
      redirect: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleOptionChange(e) {
    this.setState({
      tags: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      isSending: true,
      redirect: true // TODO: pasar bajo despues de la response 200
    });

    // axios
    //   .post(
    //     'https://alfredosmondino.wipargentina.com/backend/mail.php',
    //     this.state
    //   )
    //   .then((response) => {
    //     console.log(response);
    //     if (response.status === 200) {
    //       this.setState({
    //         fname: '',
    //         lname: '',
    //         email: '',
    //         phone: '',
    //         country: '',
    //         location: '',
    //         isSended: true,
    //         redirect: true
    //       });
    //       window.location.assign(process.env.PUBLIC_URL + '/gracias');
    //     }
    //     if (response.status === 400) {
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     this.setState({
    //       isError: true
    //     });
    //   });

    console.log(this.state);

    // window.location.assign(process.env.PUBLIC_URL + '/gracias');
  }

  render() {
    // const isSending = this.state.isSending;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/gracias' />;
    }

    return (
      <section id='form' className='form'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <h2>Solicitá más información</h2>
              <h5>
                Completá el siguiente formulario para conocer más sobre el
                servicio, nuestros planes y precios.
              </h5>

              <form action='' onSubmit={this.handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label htmlFor=''>Nombre</label>
                      <input
                        type='text'
                        name='fname'
                        className='form-control form-control-lg'
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label htmlFor=''>Apellido</label>
                      <input
                        type='text'
                        name='lname'
                        className='form-control form-control-lg'
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label htmlFor=''>Email</label>
                      <input
                        type='email'
                        name='email'
                        className='form-control form-control-lg'
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label htmlFor=''>Teléfono</label>
                      <input
                        type='text'
                        name='phone'
                        className='form-control form-control-lg'
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className='row mb-3'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label htmlFor=''>Provincia/Estado</label>
                      <input
                        type='text'
                        name='country'
                        className='form-control form-control-lg'
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label htmlFor=''>Localidad</label>
                      <input
                        type='text'
                        name='location'
                        className='form-control form-control-lg'
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6 mb-4 mb-sm-0'>
                    <div className='custom-control custom-checkbox'>
                      <input
                        type='checkbox'
                        className='custom-control-input'
                        id='customCheck1'
                        name='policy'
                        onChange={this.handleChange}
                        checked={this.state.policy ? 'checked' : ''}
                      />
                      <label
                        className='custom-control-label mb-1'
                        htmlFor='customCheck1'
                      >
                        Acepto las políticas de privacidad
                      </label>
                      <div>
                        <a
                          href='https://www.genganar.com/genganar/politica-de-privacidad/'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          Ver políticas de privacidad
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    {this.state.policy ? (
                      <button className='btn btn-lg btn-warning text-uppercase cta'>
                        Quiero más información
                      </button>
                    ) : (
                      <button
                        className='btn btn-lg btn-warning text-uppercase cta'
                        disabled
                      >
                        Quiero más información
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Form;
