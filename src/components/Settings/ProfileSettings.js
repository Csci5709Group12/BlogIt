import { Card, Form, InputGroup, Button } from "react-bootstrap";
import * as formik from 'formik';
import * as yup from 'yup';
import { Link } from "react-router-dom";


function ProfileSettings() {
  const { Formik } = formik;
  const username = 'jdoe';

  const schema = yup.object().shape(
    {
      name: yup.string(),
      username: yup.string().min(6, "Username is too short - should be 6 characters minimum").required("Please enter username"),
      email: yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Please enter a valid email").required("Please enter email"),
      website: yup.string(),
      location: yup.string(),
      bio: yup.string()
    }
  );

  return (
    <div className="App">
      <div style={{ marginBottom: '1rem' }}>
        <h2><Link to={'/user/' + username}>@{username}</Link></h2>
      </div>
      <Card>
        <Card.Body>
          <Formik
            validationSchema={schema}
            onSubmit={
              async values => {
              }
            }
            initialValues={{
              name: '',
              username: '',
              email: '',
              profilePicture: '',
              website: '',
              location: '',
              bio: '',
              pronouns: ''
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

                <Form.Group className="mb-3" controlId="validationFormikName">
                  <Card.Title>
                    User
                  </Card.Title>
                  <Form.Label className="d-flex">Name</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.name}
                      placeholder="Enter your name"
                    />
                    <Form.Control.Feedback type="invalid" className='d-flex'>
                      {errors.name}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationFormikUsername">
                  <Form.Label class="d-flex">Username</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="input"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.username && !errors.username}
                      isInvalid={!!errors.username}
                      placeholder="Enter a username" />
                    <Form.Control.Feedback className="d-flex" type="invalid">
                      {errors.username}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

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

                <Form.Group controlId="profilePictureFile" className="mb-3">
                  <Form.Label>Profile Picture</Form.Label>
                  <Form.Control
                    type="file"
                    name="profilePicture" />
                </Form.Group>

                <Form.Group controlId="profileBannerFile" className="mb-3">
                  <Form.Label>Profile Banner</Form.Label>
                  <Form.Control
                    type="file"
                    name="profileBanner" />
                </Form.Group>

                <Card.Title>
                  Basic
                </Card.Title>

                <Form.Group className="mb-3" controlId="validationFormik03">
                  <Form.Label class="d-flex">Website URL</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="text"
                      name="website"
                      value={values.website}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.website && !errors.website}
                      isInvalid={!!errors.website}
                      placeholder="https://example.com" />
                    <Form.Control.Feedback className="d-flex" type="invalid">
                      {errors.website}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationFormik03">
                  <Form.Label class="d-flex">Location</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="text"
                      name="location"
                      value={values.location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.location}
                      placeholder="For example, Knowhere" />
                    <Form.Control.Feedback className="d-flex" type="invalid">
                      {errors.location}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationFormik03">
                  <Form.Label class="d-flex">Bio</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="text"
                      as="textarea"
                      name="bio"
                      value={values.bio}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.bio}
                      placeholder="A short bio..." />
                    <Form.Control.Feedback className="d-flex" type="invalid">
                      {errors.bio}
                    </Form.Control.Feedback>
                  </InputGroup>
                  <Form.Text muted>
                    Tell everyone about yourself
                  </Form.Text>
                </Form.Group>

                <Card.Title>
                  Personal
                </Card.Title>

                <Form.Group className="mb-3" controlId="validationFormik03">
                  <Form.Label class="d-flex">Pronouns</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="text"
                      name="pronouns"
                      value={values.pronouns}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.pronouns} />
                    <Form.Control.Feedback className="d-flex" type="invalid">
                      {errors.pronouns}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Card.Title>
                  Work
                </Card.Title>

                <Form.Group className="mb-3" controlId="validationFormik03">
                  <Form.Label class="d-flex">What do you do?</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="text"
                      name="work"
                      value={values.work}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.work}
                      placeholder="For example, CEO at Wayne Enterprises" />
                    <Form.Control.Feedback className="d-flex" type="invalid">
                      {errors.work}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationFormik03">
                  <Form.Label class="d-flex">Education</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="text"
                      name="education"
                      value={values.education}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.education}
                      placeholder="Where did you go to school?" />
                    <Form.Control.Feedback className="d-flex" type="invalid">
                      {errors.education}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" type='submit' className='btn-pri-bg-color'>
                    Save Profile Information
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProfileSettings;