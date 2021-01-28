import React, { Component } from 'react';
// import { useHistory } from 'react-router-dom';

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
      isError: false
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
      isSending: true
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
    //         location: '',
    //         isSended: true
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
    return (
      <section className='form'>
        <div className='container'>
          <h2>Solicita más información</h2>

          <form action='' onSubmit={this.handleSubmit}>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label htmlFor=''>Nombre</label>
                      <input
                        type='text'
                        name='fname'
                        className='form-control'
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
                        className='form-control'
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
                        type='text'
                        name='fname'
                        className='form-control'
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label htmlFor=''>Teléfono</label>
                      <input
                        type='text'
                        name='lname'
                        className='form-control'
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className='row mb-3'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label htmlFor=''>País</label>
                      <input
                        type='text'
                        name='fname'
                        className='form-control'
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label htmlFor=''>Localidad</label>
                      <input
                        type='text'
                        name='lname'
                        className='form-control'
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
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
                        className='custom-control-label'
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
                          ver políticas de privacidad
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    {this.state.policy ? (
                      <button className='btn btn-lg btn-secondary text-uppercase cta'>
                        Enviar
                      </button>
                    ) : (
                      <button
                        className='btn btn-lg btn-secondary text-uppercase cta'
                        disabled
                      >
                        Enviar
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Form;
