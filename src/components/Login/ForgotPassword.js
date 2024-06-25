import { Alert, Button, Container, Form, InputGroup, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from "react-router-dom";
import * as formik from 'formik';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import { useNavigate } from "react-router-dom";
import '../../App.css';
import '../common.css';
import brandLogo from '../../img/logo.png';
import infoLogo from '../../assets/info_icon.svg'

YupPassword(yup);

function ForgotPassword() {
  const { Formik } = formik;
  const navigate = useNavigate();
  const [resetSuccessShow, resetSuccessSetShow] = useState(false);

  const renderTooltip = (props) => (
    <Tooltip id="info-logo-tooltip" {...props}>
      Password should contain at least 8 characters including 1 lower case character, 1 upper case character, 1 number and 1 special character.
    </Tooltip>
  );

  const schema = yup.object().shape(
    {
      email: yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Please enter a valid email").required("Required"),
      password: yup.string().required("Required").password()
      .min(8, "Password must contain at least 8 characters")
      .minLowercase(1, "Password must contain at least one lower case character")
      .minUppercase(1, "Password must contain at least one upper case character")
      .minNumbers(1, "Password must contain at least one number")
      .minSymbols(1, "Password must contain at least one special character"),
      passwordConfirmation: yup.string().required("Required")
      .oneOf([yup.ref('password')], 'Passwords must match'),
    }
  );

  return (
    <div className='App'>
      <Container>
        <div class="row d-flex justify-content-center align-items-center h-100 pt-5">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style={{ borderRadius: 15 + 'px' }}>
              <div class="card-body p-5">
                <Link to="/">
                  <div className='d-flex justify-content-center'>
                    <Image src={brandLogo} style={{ width: '30%' }} />
                  </div>
                </Link>
                <h2 class="card-title d-flex mt-2">Reset password</h2>
                <Formik
                  validationSchema={schema}
                  onSubmit={
                    async values => {
                      resetSuccessSetShow(true);
                      await new Promise(resolve => setTimeout(resolve, 1000));
                      navigate("/login");
                    }
                  }
                  initialValues={{
                    email: '',
                    password: '',
                    passwordConfirmation: '',
                  }}
                >
                  {({ values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset }) => (
                    <Form noValidate onSubmit={handleSubmit} class="d-flex">
                      <Form.Group className="mb-3" controlId="validationFormik03">
                        <Form.Label class="d-flex">Email address</Form.Label>
                        <InputGroup hasValidation>
                          <Form.Control
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={touched.email && !errors.email}
                            isInvalid={!!errors.email}
                            placeholder="Enter email" />
                          <Form.Control.Feedback className="d-flex" type="invalid">
                            {errors.email}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                      
                      <Form.Group className="mb-3" controlId="validationFormik04">
                        <Form.Label class="d-flex">
                          Password
                          <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                          >
                            <img src={infoLogo} alt="Info Logo" className="ms-1" />
                          </OverlayTrigger>
                        </Form.Label>
                        <InputGroup hasValidation>
                          <Form.Control
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={touched.password && !errors.password}
                            isInvalid={!!errors.password}
                            placeholder="Enter password"
                          />
                          <Form.Control.Feedback className="d-flex" type="invalid">
                            {errors.password}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                      
                      <Form.Group className="mb-3" controlId="validationFormik05">
                        <Form.Label className="d-flex">Password Confirmation</Form.Label>
                        <InputGroup hasValidation>
                          <Form.Control
                            type="password"
                            name="passwordConfirmation"
                            value={values.passwordConfirmation}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={touched.passwordConfirmation && !errors.passwordConfirmation}
                            isInvalid={!!errors.passwordConfirmation}
                            placeholder="Enter password again"
                          />
                          <Form.Control.Feedback className="d-flex" type="invalid">
                            {errors.passwordConfirmation}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>

                      <div className="d-grid gap-2">
                        <Button variant="primary" type='submit' size="lg">
                          Reset Password
                        </Button>
                      </div>
                    </Form>
                  )}

                </Formik>
                <div className="pt-2">
                  <Alert key="success" variant="success" show={resetSuccessShow}>
                    You have successfully reset your password!
                  </Alert>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ForgotPassword;