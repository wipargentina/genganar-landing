import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      phone: '',
      state: '',
      location: '',
      tag: 'cabañero',
      policy: '',
      isSending: false,
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
    this.setState({
      isSending: true
    });

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'landing', ...this.state })
    })
      .then(() => {
        this.setState({
          isSending: false,
          redirect: true
        });
      })
      .catch((error) => alert(error));

    console.log(this.state);

    e.preventDefault();
  }

  render() {
    const { redirect } = this.state;
    const isSending = this.state.isSending;

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
              <form name='landing' onSubmit={this.handleSubmit}>
                <input type='hidden' name='form-name' value='landing' />
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label htmlFor=''>Nombre</label>
                      <input
                        type='text'
                        name='fname'
                        className='form-control form-control-lg'
                        onChange={this.handleChange}
                        required
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
                        required
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
                        required
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
                        required
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
                        name='state'
                        className='form-control form-control-lg'
                        onChange={this.handleChange}
                        required
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
                        required
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
                  {isSending ? 'enviando' : ''}
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
