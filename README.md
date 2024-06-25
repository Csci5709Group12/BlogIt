# BlogIt

Our project BlogIt is a comprehensive community-based blogging platform. This platform is designed to promote and foster a vibrant and interactive community, where writers, readers and enthusiasts can share, discover, and engage with high-quality content. BlogIt will provide an inclusive space for individuals to publish their personal blogs, connect with like-minded peers, join large communities, and participate in thoughtful discussions. The application will feature robust profile management, comprehensive blogging tools, communities, intricate search and filtering, upvote system, detailed analytics.

- _Date Created_: 12 Jun 2024
- _Last Modification Date_: 24 Jun 2024
- _Lab URL_:
- _Git URL_: https://git.cs.dal.ca/kottur/csci-5709-group-12

## Authors

The group members are as follows

- [Sanjana Rampur Kottur](mailto:sanjana.rampurkottur@dal.ca) - _Maintainer_
- [Prithvi Manoj Krishna](mailto:prithvimk@dal.ca) - _Maintainer_
- [Namrata Bhaumik](mailto:namrata.bhaumik@dal.ca) - _Maintainer_
- [Zeel Ravalani](mailto:zeel.ravalani@dal.ca) - _Maintainer_
- [Pratik Sakaria](mailto:pratik.sakaria@dal.ca) - _Maintainer_
- [MD Samshad Rahman](mailto:samshad@dal.ca) - _Maintainer_

## Getting Started

### Frontend

To run the application on a local machine or to deploy the application to a live server, follow the below steps.

#### Prerequisites

To have a local copy of this project up and running on your local machine, you will first need to install the libraries.

| Dependency                        | Version  |
| --------------------------------- | -------- |
| @emotion/react                    | ^11.11.4 |
| @emotion/styled                   | ^11.11.5 |
| @fortawesome/fontawesome-svg-core | ^6.5.2   |
| @fortawesome/free-solid-svg-icons | ^6.5.2   |
| @fortawesome/react-fontawesome    | ^0.2.2   |
| @mui/material                     | ^5.15.19 |
| @testing-library/jest-dom         | ^5.17.0  |
| @testing-library/react            | ^13.4.0  |
| @testing-library/user-event       | ^13.5.0  |
| bootstrap                         | ^5.3.3   |
| bootstrap-icons                   | ^1.11.3  |
| firebase                          | ^10.12.2 |
| formik                            | ^2.4.6   |
| quill                             | ^2.0.2   |
| react                             | ^18.3.1  |
| react-bootstrap                   | ^2.10.2  |
| react-dom                         | ^18.3.1  |
| react-icons                       | ^5.2.1   |
| react-player                      | ^2.16.0  |
| react-quill                       | ^2.0.0   |
| react-router-dom                  | ^6.23.1  |
| react-scripts                     | 5.0.1    |
| react-toastify                    | ^10.0.5  |
| web-vitals                        | ^2.1.4   |
| yup                               | ^1.4.0   |
| yup-password                      | ^0.4.0   |

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

#### Installing

To install these libraries, just navigate to the `frontend` folder and run the below command.

```sh
npm install
```

Once all the libraries are installed, you can run the application directly by running the below command.

```sh
npm start
```

#### Deployment

To deploy the frontend on a server, we can run the build using the below command.

```sh
npm run build
```

## Sources Used

Some of the sources used in our frontend are mentioned below along with their sources and attribution.

### ComposeBlogPost.js

_Lines 173 - 179_

```jsx
<ReactQuill
  className="editor"
  theme="snow"
  value={value}
  onChange={setValue}
  placeholder="Write your post content here..."
/>
```

**Author Attribution:**

The provided code snippet is adapted from the [React Quill](https://quilljs.com/docs/modules/toolbar) documentation, which demonstrates how to integrate the React Quill rich text editor into a React component. The original code can be found in the React Quill documentation.

**Explanation:**

I have utilized the React Quill rich text editor component for users to input and edit rich text content for blog posts. In this scenario, the value state variable stores the current content of the editor, updating whenever the user makes changes. The onChange function ensures the component stays synchronized with user input by updating the value state. Additionally, the placeholder prop guides users on what to input in the editor. This modification is crucial for seamlessly integrating the React Quill editor into the application's UI. Hence, I have used this code from this particular source.

```jsx
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function MyComponent() {
  const [value, setValue] = useState("");

  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}
```

---

_Lines 118 - 126_

```jsx
{
  selectedImage && (
    <div className="image-container">
      <img src={selectedImage} alt="Selected" className="thumbnail" />
      <div>
        <Button
          variant="danger"
          style={{ margin: "10px" }}
          onClick={removeImage}
        >
          Remove
        </Button>
        <Button
          variant="secondary"
          onClick={() => document.getElementById("fileInput").click()}
        >
          Change
        </Button>
      </div>
    </div>
  );
}
```

**Author Attribution:**

The provided code snippet is adapted from the React documentation, specifically demonstrating [conditional rendering](https://react.dev/learn/conditional-rendering#conditionally-returning-jsx) based on the length of the unreadMessages array. The original code can be found in the React documentation.

**Explanation:**

In this particular scenario, I have utilized this logic to conditionally display an image (selectedImage) in the UI. The selectedImage variable holds the path to the selected image. If there is a selected image, it will be rendered using the `<img>` element. This modification is necessary to display the selected image in our application's UI. Additionally, this modification is required to keep the user posted about the selected image, which makes the user experience much better and smooth.

```jsx
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}
```

A similar attribution can be applied to `ComposeVideoPost.js` as well because we are using conditional rendering to display an attached video or image item.

---

### BlogPost.js:

_Lines 101 - 114:_

```jsx
<Card className="my-4 card">
  <Card.Img variant="top" src={post.image} className="card-img-top" />
  <Card.Body>
    <Card.Title>
      <h1>
        <strong>{post.title}</strong>
      </h1>
    </Card.Title>
    <Card.Text>
      <i>{post.tags}</i>
    </Card.Text>
    <Card.Text dangerouslySetInnerHTML={{ __html: post.content }} />
  </Card.Body>
</Card>
```

**Author Attribution:**

The provided code snippet is adapted from the Bootstrap documentation, specifically demonstrating [Cards](https://react-bootstrap.netlify.app/docs/components/cards/) based on the different layouts. The original code can be found in the Bootstrap documentation.

**Explanation:**

In this scenario, I am creating a custom Card component to render each blog post using components like `<Card.Img>, <Card.Body>, <Card.Title> and <Card.Text>`. Based on these components, we are reusing this custom card to display each blog separately on the Blog Feed page.

```jsx
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicExample() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
```

A similar attribution can be applied to `VideoPost.js` as well because it utilizes the `<Card>` component to render each video item.

### BlogFeedItem.js

_Lines 58 - 89_

```jsx
<OverlayTrigger
  show={userPopupShow}
  placement="auto-start"
  key="bottom"
  overlay={
    <Popover
      id="user-popover-bottom"
      onMouseEnter={handleUserNameOnMouseEnter}
      onMouseLeave={handleUserNameOnMouseLeave}
    >
      <Popover.Body>
        <Row xs="auto">
          <Col>
            <Image
              className="border border-white d-flex"
              src="https://placehold.co/600x400"
              style={{ height: "40px", width: "40px", objectFit: "cover" }}
              alt="user_picture"
              roundedCircle
            />
          </Col>
          <Col>
            <Link to="/user/jdoe">
              <div
                className="d-flex"
                style={{ marginLeft: "-10px", marginTop: "6px" }}
              >
                <strong>John Doe</strong>
              </div>
            </Link>
          </Col>
        </Row>
        <div className="mt-2">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...
        </div>
        <div className="mt-2">
          <strong>Location</strong>
        </div>
        <div>Halifax</div>
        <div>
          <strong>Joined</strong>
        </div>
        <div>Jun 19, 2024</div>
      </Popover.Body>
    </Popover>
  }
>
  <div
    className="d-flex"
    onMouseEnter={handleUserNameOnMouseEnter}
    onMouseLeave={handleUserNameOnMouseLeave}
  >
    <Link to="/user/jdoe">John Doe</Link>
  </div>
</OverlayTrigger>
```

The code above was created adapting the code in [Overlay | React Bootstrap](https://react-bootstrap.netlify.app/docs/components/overlays/)

```jsx
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function PopoverPositionedExample() {
  return (
    <>
      {["top", "right", "bottom", "left"].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
              <Popover.Body>
                <strong>Holy guacamole!</strong> Check this info.
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="secondary">Popover on {placement}</Button>
        </OverlayTrigger>
      ))}
    </>
  );
}

export default PopoverPositionedExample;
```

- The code in [Overlay | React Bootstrap](https://react-bootstrap.netlify.app/docs/components/overlays/) was implemented by reading and understanding the snippet. After internalizing it, I have adapted and modified the code according to the requirement of our project.
- [Overlay | React Bootstrap](https://react-bootstrap.netlify.app/docs/components/overlays/)'s code was used because I believed it to be an integral part of our project. The original code follows best practices in software development and design which gives me an opportunity to learn and understand frontend development concepts. Integrating and using optimally designed code from external source assists me in achieving the desired functionality and results. Additionally, it also significantly reduces development and design time.
- [Overlay | React Bootstrap](https://react-bootstrap.netlify.app/docs/components/overlays/)'s code was modified by understanding what it does and editing it depending on the requirements of our application. These changes encapsulated many modifications including but not limited to updating attributes, components, properties, additions, deletions, and integration.

### Login.js

_Lines 10 - 126_

```jsx
function Login() {
  const { Formik } = formik;
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup
      .string()
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Please enter a valid email"
      )
      .required("Required"),
    password: yup.string().required("Required"),
  });

  return (
    <div className="App">
      <Container>
        <div class="row d-flex justify-content-center align-items-center h-100 pt-5">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style={{ borderRadius: 15 + "px" }}>
              <div class="card-body p-5">
                <Link to="/">
                  <div className="d-flex justify-content-center">
                    <Image src={brandLogo} style={{ width: "30%" }} />
                  </div>
                </Link>
                <h2 class="card-title d-flex">Log In</h2>
                <Formik
                  validationSchema={schema}
                  onSubmit={async (values) => {
                    navigate("/");
                  }}
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                >
                  {({
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                  }) => (
                    <Form noValidate onSubmit={handleSubmit} class="d-flex">
                      <Form.Group
                        className="mb-3"
                        controlId="validationFormik03"
                      >
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
                            placeholder="Enter email"
                          />
                          <Form.Control.Feedback
                            className="d-flex"
                            type="invalid"
                          >
                            {errors.email}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="validationFormik04"
                      >
                        <Form.Label class="d-flex">Password</Form.Label>
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
                          <Form.Control.Feedback
                            className="d-flex"
                            type="invalid"
                          >
                            {errors.password}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>

                      <div className="row">
                        <Col>
                          <Form.Group className="d-flex mb-3">
                            <Form.Check
                              name="rememberMe"
                              label="Remember Me"
                              onChange={handleChange}
                              id="validationFormik106"
                            />
                          </Form.Group>
                        </Col>
                        <Col className="text-end">
                          <Link to="/forgot-password">Forgot password?</Link>
                        </Col>
                      </div>

                      <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" size="lg">
                          Log in
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
```

The code above was created adapting the code in [React Bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation).

```jsx
function FormExample() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: "Mark",
        lastName: "Otto",
        username: "",
        city: "",
        state: "",
        zip: "",
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}
```

- The code in [React Bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation) was implemented by reading and understanding the snippet. After internalizing it, I have adapted and modified the code according to the requirement of our project.
- [React Bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation)'s code was used because I believed it to be an integral part of our project. The original code follows best practices in software development and design which gives me an opportunity to learn and understand frontend development concepts. Integrating and using optimally designed code from external source assists me in achieving the desired functionality and results. Additionally, it also significantly reduces development and design time.
- [React Bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation)'s code was modified by understanding what it does and editing it depending on the requirements of our application. These changes encapsulated many modifications including but not limited to updating attributes, components, properties, additions, deletions, and integration.

_Line 16_

```jsx
email: yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Please enter a valid email").required("Required"),
```

The code above was created adapting the code in [Mailtrap](https://mailtrap.io/blog/validate-emails-in-react/).

```jsx
/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
```

- The code in [Mailtrap](https://mailtrap.io/blog/validate-emails-in-react/) was implemented by reading and understanding the snippet. After internalizing it, I have adapted and modified the code according to the requirement of our project.
- [Mailtrap](https://mailtrap.io/blog/validate-emails-in-react/)'s code was used because I believed it to be an integral part of our project. The original code follows best practices in software development and design which gives me an opportunity to learn and understand frontend development concepts. Integrating and using optimally designed code from external source assists me in achieving the desired functionality and results. Additionally, it also significantly reduces development and design time.
- [Mailtrap](https://mailtrap.io/blog/validate-emails-in-react/)'s code was modified by understanding what it does and editing it depending on the requirements of our application. These changes encapsulated many modifications including but not limited to updating attributes, components, properties, additions, deletions, and integration.

_Lines 24 - 27_

```jsx
<div class="row d-flex justify-content-center align-items-center h-100 pt-5">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style={{ borderRadius: 15 + 'px' }}>
              <div class="card-body p-5">
```

The code above was created adapting the code in [Bootstrap 5 Registration form component ](https://mdbootstrap.com/docs/standard/extended/registration/#section-7).

```html
<section
  class="vh-100 bg-image"
  style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');"
>
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Create an account</h2>
              <form>
                <div data-mdb-input-init class="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example1cg"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="form3Example1cg"
                    >Your Name</label
                  >
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3cg"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="form3Example3cg"
                    >Your Email</label
                  >
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input
                    type="password"
                    id="form3Example4cg"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="form3Example4cg"
                    >Password</label
                  >
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input
                    type="password"
                    id="form3Example4cdg"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="form3Example4cdg"
                    >Repeat your password</label
                  >
                </div>

                <div class="form-check d-flex justify-content-center mb-5">
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3cg"
                  />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in
                    <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div class="d-flex justify-content-center">
                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                  >
                    Register
                  </button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">
                  Have already an account?
                  <a href="#!" class="fw-bold text-body"><u>Login here</u></a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

- The code in [Bootstrap 5 Registration form component ](https://mdbootstrap.com/docs/standard/extended/registration/#section-7) was implemented by reading and understanding the snippet. After internalizing it, I have adapted and modified the code according to the requirement of our project.
- [Bootstrap 5 Registration form component ](https://mdbootstrap.com/docs/standard/extended/registration/#section-7)'s code was used because I believed it to be an integral part of our project. The original code follows best practices in software development and design which gives me an opportunity to learn and understand frontend development concepts. Integrating and using optimally designed code from external source assists me in achieving the desired functionality and results. Additionally, it also significantly reduces development and design time.
- [Bootstrap 5 Registration form component ](https://mdbootstrap.com/docs/standard/extended/registration/#section-7)'s code was modified by understanding what it does and editing it depending on the requirements of our application. These changes encapsulated many modifications including but not limited to updating attributes, components, properties, additions, deletions, and integration.

### Signup.js

_Lines 43 - 46_

```jsx
<div class="row d-flex justify-content-center align-items-center h-100 pt-5">
  <div class="col-12 col-md-9 col-lg-7 col-xl-6">
    <div class="card" style={{ borderRadius: 15 + 'px' }}>
      <div class="card-body p-5">
```

The code above was created adapting the code in [Bootstrap 5 Registration form component ](https://mdbootstrap.com/docs/standard/extended/registration/#section-7).

```html
<section
  class="vh-100 bg-image"
  style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');"
>
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Create an account</h2>
              <form>
                <div data-mdb-input-init class="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example1cg"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="form3Example1cg"
                    >Your Name</label
                  >
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3cg"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="form3Example3cg"
                    >Your Email</label
                  >
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input
                    type="password"
                    id="form3Example4cg"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="form3Example4cg"
                    >Password</label
                  >
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input
                    type="password"
                    id="form3Example4cdg"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="form3Example4cdg"
                    >Repeat your password</label
                  >
                </div>

                <div class="form-check d-flex justify-content-center mb-5">
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3cg"
                  />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in
                    <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div class="d-flex justify-content-center">
                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                  >
                    Register
                  </button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">
                  Have already an account?
                  <a href="#!" class="fw-bold text-body"><u>Login here</u></a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

- The code in [Bootstrap 5 Registration form component ](https://mdbootstrap.com/docs/standard/extended/registration/#section-7) was implemented by reading and understanding the snippet. After internalizing it, I have adapted and modified the code according to the requirement of our project.
- [Bootstrap 5 Registration form component ](https://mdbootstrap.com/docs/standard/extended/registration/#section-7)'s code was used because I believed it to be an integral part of our project. The original code follows best practices in software development and design which gives me an opportunity to learn and understand frontend development concepts. Integrating and using optimally designed code from external source assists me in achieving the desired functionality and results. Additionally, it also significantly reduces development and design time.
- [Bootstrap 5 Registration form component ](https://mdbootstrap.com/docs/standard/extended/registration/#section-7)'s code was modified by understanding what it does and editing it depending on the requirements of our application. These changes encapsulated many modifications including but not limited to updating attributes, components, properties, additions, deletions, and integration.

_Lines 24 - 203_

```jsx
const schema = yup.object().shape(
    {
      name: yup.string().required("Required"),
      username: yup.string().required("Required").min(6, "Username is too short - should be 6 characters minimum"),
      email: yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Please enter a valid email").required("Required"),
      password: yup.string().required("Required").password()
        .min(8, "Password must contain at least 8 characters")
        .minLowercase(1, "Password must contain at least one lower case character")
        .minUppercase(1, "Password must contain at least one upper case character")
        .minNumbers(1, "Password must contain at least one number")
        .minSymbols(1, "Password must contain at least one special character"),
      passwordConfirmation: yup.string().required("Required")
        .oneOf([yup.ref('password')], 'Passwords must match')
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
                <h2 class="card-title d-flex mt-2">Create your account</h2>
                <Formik
                  validationSchema={schema}
                  onSubmit={
                    async values => {
                      await new Promise(resolve => setTimeout(resolve, 500));
                      signupSuccessSetShow(true);
                      await new Promise(resolve => setTimeout(resolve, 1000));
                      navigate("/login");
                    }
                  }
                  initialValues={{
                    name: '',
                    username: '',
                    email: '',
                    password: '',
                    passwordConfirmation: ''
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
                        <Button variant="primary" type='submit' size='lg'>
                          Sign up
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
                <div className="pt-2">
                  <Alert key="success" variant="success" show={signupSuccessShow}>
                    You have successfully created an account!
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
```

The code above was created adapting the code in [React Bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation).

```jsx
function FormExample() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: "Mark",
        lastName: "Otto",
        username: "",
        city: "",
        state: "",
        zip: "",
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}
```

- The code in [React Bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation) was implemented by reading and understanding the snippet. After internalizing it, I have adapted and modified the code according to the requirement of our project.
- [React Bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation)'s code was used because I believed it to be an integral part of our project. The original code follows best practices in software development and design which gives me an opportunity to learn and understand frontend development concepts. Integrating and using optimally designed code from external source assists me in achieving the desired functionality and results. Additionally, it also significantly reduces development and design time.
- [React Bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation)'s code was modified by understanding what it does and editing it depending on the requirements of our application. These changes encapsulated many modifications including but not limited to updating attributes, components, properties, additions, deletions, and integration.

_Line 28_

```jsx
email: yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Please enter a valid email").required("Required"),
```

The code above was created adapting the code in [Mailtrap](https://mailtrap.io/blog/validate-emails-in-react/).

```jsx
/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
```

- The code in [Mailtrap](https://mailtrap.io/blog/validate-emails-in-react/) was implemented by reading and understanding the snippet. After internalizing it, I have adapted and modified the code according to the requirement of our project.
- [Mailtrap](https://mailtrap.io/blog/validate-emails-in-react/)'s code was used because I believed it to be an integral part of our project. The original code follows best practices in software development and design which gives me an opportunity to learn and understand frontend development concepts. Integrating and using optimally designed code from external source assists me in achieving the desired functionality and results. Additionally, it also significantly reduces development and design time.
- [Mailtrap](https://mailtrap.io/blog/validate-emails-in-react/)'s code was modified by understanding what it does and editing it depending on the requirements of our application. These changes encapsulated many modifications including but not limited to updating attributes, components, properties, additions, deletions, and integration.

_Lines 29 - 34_

```jsx
password: yup.string().required("Required").password()
        .min(8, "Password must contain at least 8 characters")
        .minLowercase(1, "Password must contain at least one lower case character")
        .minUppercase(1, "Password must contain at least one upper case character")
        .minNumbers(1, "Password must contain at least one number")
        .minSymbols(1, "Password must contain at least one special character"),
```

The code above was created adapting the code in [Stackoverflow](https://stackoverflow.com/a/72474290).

```jsx
const requiredField = () => Yup.string().required("required");
const passwordField = () =>
  requiredField()
    .min(
      8,
      "password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special"
    )
    .minLowercase(1, "password must contain at least 1 lower case letter")
    .minUppercase(1, "password must contain at least 1 upper case letter")
    .minNumbers(1, "password must contain at least 1 number")
    .minSymbols(1, "password must contain at least 1 special character");
```

- The code in [Stackoverflow](https://stackoverflow.com/a/72474290) was implemented by reading and understanding the snippet. After internalizing it, I have adapted and modified the code according to the requirement of our project.
- [Stackoverflow](https://stackoverflow.com/a/72474290)'s code was used because I believed it to be an integral part of our project. The original code follows best practices in software development and design which gives me an opportunity to learn and understand frontend development concepts. Integrating and using optimally designed code from external source assists me in achieving the desired functionality and results. Additionally, it also significantly reduces development and design time.
- [Stackoverflow](https://stackoverflow.com/a/72474290)'s code was modified by understanding what it does and editing it depending on the requirements of our application. These changes encapsulated many modifications including but not limited to updating attributes, components, properties, additions, deletions, and integration.

_Lines 192 - 194_

```jsx
<Alert key="success" variant="success" show={signupSuccessShow}>
  You have successfully created an account!
</Alert>
```

The code above was created adapting the code in [React Bootstrap](https://react-bootstrap.netlify.app/docs/components/alerts/).

```jsx
function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}
```

- The code in [React Bootstrap](https://react-bootstrap.netlify.app/docs/components/alerts/) was implemented by reading and understanding the snippet. After internalizing it, I have adapted and modified the code according to the requirement of our project.
- [React Bootstrap](https://react-bootstrap.netlify.app/docs/components/alerts/)'s code was used because I believed it to be an integral part of our project. The original code follows best practices in software development and design which gives me an opportunity to learn and understand frontend development concepts. Integrating and using optimally designed code from external source assists me in achieving the desired functionality and results. Additionally, it also significantly reduces development and design time.
- [React Bootstrap](https://react-bootstrap.netlify.app/docs/components/alerts/)'s code was modified by understanding what it does and editing it depending on the requirements of our application. These changes encapsulated many modifications including but not limited to updating attributes, components, properties, additions, deletions, and integration.

_Lines 139 - 145_

```jsx
<OverlayTrigger
  placement="right"
  delay={{ show: 250, hide: 400 }}
  overlay={renderTooltip}
>
  <img src={infoLogo} alt="Info Logo" className="ms-1" />
</OverlayTrigger>
```

_Lines 18 - 22_

```jsx
const renderTooltip = (props) => (
  <Tooltip id="info-logo-tooltip" {...props}>
    Password should contain at least 8 characters including 1 lower case
    character, 1 upper case character, 1 number and 1 special character.
  </Tooltip>
);
```

The code above was created adapting the code in [React Bootstrap](https://react-bootstrap.netlify.app/docs/components/overlays).

```jsx
const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Simple tooltip
  </Tooltip>
);

return (
  <OverlayTrigger
    placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip}
  >
    <Button variant="success">Hover me to see</Button>
  </OverlayTrigger>
);
```

- The code in [React Bootstrap](https://react-bootstrap.netlify.app/docs/components/overlays) was implemented by reading and understanding the snippet. After internalizing it, I have adapted and modified the code according to the requirement of our project.
- [React Bootstrap](https://react-bootstrap.netlify.app/docs/components/overlays)'s code was used because I believed it to be an integral part of our project. The original code follows best practices in software development and design which gives me an opportunity to learn and understand frontend development concepts. Integrating and using optimally designed code from external source assists me in achieving the desired functionality and results. Additionally, it also significantly reduces development and design time.
- [React Bootstrap](https://react-bootstrap.netlify.app/docs/components/overlays)'s code was modified by understanding what it does and editing it depending on the requirements of our application. These changes encapsulated many modifications including but not limited to updating attributes, components, properties, additions, deletions, and integration.

### ForgotPassword.js

_Lines 43 - 46_

```jsx
<div class="row d-flex justify-content-center align-items-center h-100 pt-5">
  <div class="col-12 col-md-9 col-lg-7 col-xl-6">
    <div class="card" style={{ borderRadius: 15 + 'px' }}>
      <div class="card-body p-5">
```

The code above was created adapting the code in [Bootstrap 5 Registration form component ](https://mdbootstrap.com/docs/standard/extended/registration/#section-7).

```html
<section
  class="vh-100 bg-image"
  style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');"
>
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Create an account</h2>
              <form>
                <div data-mdb-input-init class="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example1cg"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="form3Example1cg"
                    >Your Name</label
                  >
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3cg"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="form3Example3cg"
                    >Your Email</label
                  >
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input
                    type="password"
                    id="form3Example4cg"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="form3Example4cg"
                    >Password</label
                  >
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input
                    type="password"
                    id="form3Example4cdg"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="form3Example4cdg"
                    >Repeat your password</label
                  >
                </div>

                <div class="form-check d-flex justify-content-center mb-5">
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3cg"
                  />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in
                    <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div class="d-flex justify-content-center">
                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                  >
                    Register
                  </button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">
                  Have already an account?
                  <a href="#!" class="fw-bold text-body"><u>Login here</u></a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

- The code in [Bootstrap 5 Registration form component ](https://mdbootstrap.com/docs/standard/extended/registration/#section-7) was implemented by reading and understanding the snippet. After internalizing it, I have adapted and modified the code according to the requirement of our project.
- [Bootstrap 5 Registration form component ](https://mdbootstrap.com/docs/standard/extended/registration/#section-7)'s code was used because I believed it to be an integral part of our project. The original code follows best practices in software development and design which gives me an opportunity to learn and understand frontend development concepts. Integrating and using optimally designed code from external source assists me in achieving the desired functionality and results. Additionally, it also significantly reduces development and design time.
- [Bootstrap 5 Registration form component ](https://mdbootstrap.com/docs/standard/extended/registration/#section-7)'s code was modified by understanding what it does and editing it depending on the requirements of our application. These changes encapsulated many modifications including but not limited to updating attributes, components, properties, additions, deletions, and integration.

_Lines 26 - 164_

```jsx
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
```

The code above was created adapting the code in [React Bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation).

```jsx
function FormExample() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: "Mark",
        lastName: "Otto",
        username: "",
        city: "",
        state: "",
        zip: "",
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}
```

- The code in [React Bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation) was implemented by reading and understanding the snippet. After internalizing it, I have adapted and modified the code according to the requirement of our project.
- [React Bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation)'s code was used because I believed it to be an integral part of our project. The original code follows best practices in software development and design which gives me an opportunity to learn and understand frontend development concepts. Integrating and using optimally designed code from external source assists me in achieving the desired functionality and results. Additionally, it also significantly reduces development and design time.
- [React Bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation)'s code was modified by understanding what it does and editing it depending on the requirements of our application. These changes encapsulated many modifications including but not limited to updating attributes, components, properties, additions, deletions, and integration.

_Lines 29 - 34_

```jsx
password: yup.string().required("Required").password()
        .min(8, "Password must contain at least 8 characters")
        .minLowercase(1, "Password must contain at least one lower case character")
        .minUppercase(1, "Password must contain at least one upper case character")
        .minNumbers(1, "Password must contain at least one number")
        .minSymbols(1, "Password must contain at least one special character"),
```

The code above was created adapting the code in [Stackoverflow](https://stackoverflow.com/a/72474290).

```jsx
const requiredField = () => Yup.string().required("required");
const passwordField = () =>
  requiredField()
    .min(
      8,
      "password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special"
    )
    .minLowercase(1, "password must contain at least 1 lower case letter")
    .minUppercase(1, "password must contain at least 1 upper case letter")
    .minNumbers(1, "password must contain at least 1 number")
    .minSymbols(1, "password must contain at least 1 special character");
```

- The code in [Stackoverflow](https://stackoverflow.com/a/72474290) was implemented by reading and understanding the snippet. After internalizing it, I have adapted and modified the code according to the requirement of our project.
- [Stackoverflow](https://stackoverflow.com/a/72474290)'s code was used because I believed it to be an integral part of our project. The original code follows best practices in software development and design which gives me an opportunity to learn and understand frontend development concepts. Integrating and using optimally designed code from external source assists me in achieving the desired functionality and results. Additionally, it also significantly reduces development and design time.
- [Stackoverflow](https://stackoverflow.com/a/72474290)'s code was modified by understanding what it does and editing it depending on the requirements of our application. These changes encapsulated many modifications including but not limited to updating attributes, components, properties, additions, deletions, and integration.

_Lines 153 - 155_

```jsx
<Alert key="success" variant="success" show={resetSuccessShow}>
  You have successfully reset your password!
</Alert>
```

The code above was created adapting the code in [React Bootstrap](https://react-bootstrap.netlify.app/docs/components/alerts/).

```jsx
function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}
```

- The code in [React Bootstrap](https://react-bootstrap.netlify.app/docs/components/alerts/) was implemented by reading and understanding the snippet. After internalizing it, I have adapted and modified the code according to the requirement of our project.
- [React Bootstrap](https://react-bootstrap.netlify.app/docs/components/alerts/)'s code was used because I believed it to be an integral part of our project. The original code follows best practices in software development and design which gives me an opportunity to learn and understand frontend development concepts. Integrating and using optimally designed code from external source assists me in achieving the desired functionality and results. Additionally, it also significantly reduces development and design time.
- [React Bootstrap](https://react-bootstrap.netlify.app/docs/components/alerts/)'s code was modified by understanding what it does and editing it depending on the requirements of our application. These changes encapsulated many modifications including but not limited to updating attributes, components, properties, additions, deletions, and integration.

_Line 28_

```jsx
email: yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Please enter a valid email").required("Required"),
```

The code above was created adapting the code in [Mailtrap](https://mailtrap.io/blog/validate-emails-in-react/).

```jsx
/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
```

- The code in [Mailtrap](https://mailtrap.io/blog/validate-emails-in-react/) was implemented by reading and understanding the snippet. After internalizing it, I have adapted and modified the code according to the requirement of our project.
- [Mailtrap](https://mailtrap.io/blog/validate-emails-in-react/)'s code was used because I believed it to be an integral part of our project. The original code follows best practices in software development and design which gives me an opportunity to learn and understand frontend development concepts. Integrating and using optimally designed code from external source assists me in achieving the desired functionality and results. Additionally, it also significantly reduces development and design time.
- [Mailtrap](https://mailtrap.io/blog/validate-emails-in-react/)'s code was modified by understanding what it does and editing it depending on the requirements of our application. These changes encapsulated many modifications including but not limited to updating attributes, components, properties, additions, deletions, and integration.

### Settings.js

_Lines 12 - 31_

```jsx
<Tab.Container id="settings-tab-layout" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Account</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={6}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <ProfileSettings />
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <AccountSettings />
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
```

The code above was created adapting the code in [Tabbed Components | React Bootstrap](https://react-bootstrap.netlify.app/docs/components/tabs).

```jsx
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

function LeftTabsExample() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">First tab content</Tab.Pane>
            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default LeftTabsExample;
```

- The code in [Tabbed Components | React Bootstrap](https://react-bootstrap.netlify.app/docs/components/tabs) was implemented by reading and understanding the snippet. After internalizing it, I have adapted and modified the code according to the requirement of our project.
- [Tabbed Components | React Bootstrap](https://react-bootstrap.netlify.app/docs/components/tabs)'s code was used because I believed it to be an integral part of our project. The original code follows best practices in software development and design which gives me an opportunity to learn and understand frontend development concepts. Integrating and using optimally designed code from external source assists me in achieving the desired functionality and results. Additionally, it also significantly reduces development and design time.
- [Tabbed Components | React Bootstrap](https://react-bootstrap.netlify.app/docs/components/tabs)'s code was modified by understanding what it does and editing it depending on the requirements of our application. These changes encapsulated many modifications including but not limited to updating attributes, components, properties, additions, deletions, and integration.

### ProfileSettings.js

_Lines 11 - 258_

```jsx
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
```

The code above was created adapting the code in [React Bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation).

```jsx
function FormExample() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: "Mark",
        lastName: "Otto",
        username: "",
        city: "",
        state: "",
        zip: "",
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}
```

- The code in [React Bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation) was implemented by reading and understanding the snippet. After internalizing it, I have adapted and modified the code according to the requirement of our project.
- [React Bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation)'s code was used because I believed it to be an integral part of our project. The original code follows best practices in software development and design which gives me an opportunity to learn and understand frontend development concepts. Integrating and using optimally designed code from external source assists me in achieving the desired functionality and results. Additionally, it also significantly reduces development and design time.
- [React Bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation)'s code was modified by understanding what it does and editing it depending on the requirements of our application. These changes encapsulated many modifications including but not limited to updating attributes, components, properties, additions, deletions, and integration.

### AccountSettings.js

_Lines 11 - 104_

```jsx
const schema = yup.object().shape(
    {
      email: yup.string().email().required("Required"),
      password: yup.string().required("Required")
    }
  );

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete you account
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Alert variant="danger" key="danger">
          Warning! You are deleting your account on BlogIt.
        </Alert>
        <div>
          <h4>Please enter your email and password to confirm deletion</h4>
          <hr />
        </div>
        <div>
          <Formik
            validationSchema={schema}
            onSubmit={
              async values => {
                await new Promise(resolve => setTimeout(resolve, 500));
                alert(JSON.stringify(values, null, 2));
              }
            }
            initialValues={{
              email: '',
              password: '',
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
                  <Form.Label class="d-flex">Password</Form.Label>
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

                <div className="d-grid gap-2">
                  <Button variant="primary" type='submit' size="lg">
                    Confirm
                  </Button>
                </div>
              </Form>
            )}
```

The code above was created adapting the code in [React Bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation).

```jsx
function FormExample() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: "Mark",
        lastName: "Otto",
        username: "",
        city: "",
        state: "",
        zip: "",
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}
```

- The code in [React Bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation) was implemented by reading and understanding the snippet. After internalizing it, I have adapted and modified the code according to the requirement of our project.
- [React Bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation)'s code was used because I believed it to be an integral part of our project. The original code follows best practices in software development and design which gives me an opportunity to learn and understand frontend development concepts. Integrating and using optimally designed code from external source assists me in achieving the desired functionality and results. Additionally, it also significantly reduces development and design time.
- [React Bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation)'s code was modified by understanding what it does and editing it depending on the requirements of our application. These changes encapsulated many modifications including but not limited to updating attributes, components, properties, additions, deletions, and integration.

_Lines 118 - 225_

```jsx
const schema = yup.object().shape(
    {
      password: yup.string(),
      newPassword: yup.string().password()
        .min(8, "Password must contain at least 8 characters")
        .minLowercase(1, "Password must contain at least one lower case character")
        .minUppercase(1, "Password must contain at least one upper case character")
        .minNumbers(1, "Password must contain at least one number")
        .minSymbols(1, "Password must contain at least one special character"),
      confirmNewPassword: yup.string()
        .oneOf([yup.ref('newPassword')], 'Passwords must match')
    }
  );
  const [deleteAccountModalShow, setDeleteAccountModalShow] = useState(false);

  return (
    <div className="App">
      <Card>
        <Card.Body>
          <Card.Title>Change password</Card.Title>
          <Formik
            validationSchema={schema}
            onSubmit={
              async values => {
                await new Promise(resolve => setTimeout(resolve, 500));
              }
            }
            initialValues={{
              password: '',
              newPassword: '',
              confirmNewPassword: '',
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
                <Form.Group className="mb-3" controlId="validationFormik04">
                  <Form.Label class="d-flex">Password</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.password}
                      placeholder="Enter password"
                    />
                    <Form.Control.Feedback className="d-flex" type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationFormik04">
                  <Form.Label class="d-flex">New password</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="password"
                      name="newPassword"
                      value={values.newPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={values.newPassword && !errors.newPassword}
                      isInvalid={!!errors.newPassword}
                      placeholder="Enter new password"
                    />
                    <Form.Control.Feedback className="d-flex" type="invalid">
                      {errors.newPassword}
                    </Form.Control.Feedback>
                  </InputGroup>
                  <Form.Text>
                    Password should contain at least 8 characters including 1 lower case character, 1 upper case character, 1 number and 1 special character.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationFormik04">
                  <Form.Label class="d-flex">Confirm new password</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="password"
                      name="confirmNewPassword"
                      value={values.confirmNewPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={values.confirmNewPassword && !errors.confirmNewPassword}
                      isInvalid={!!errors.confirmNewPassword}
                      placeholder="Confirm new password"
                    />
                    <Form.Control.Feedback className="d-flex" type="invalid">
                      {errors.confirmNewPassword}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" type='submit' size="lg">
                    Set new password
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
```

The code above was created adapting the code in [React Bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation).

```jsx
function FormExample() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: "Mark",
        lastName: "Otto",
        username: "",
        city: "",
        state: "",
        zip: "",
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}
```

- The code in [React Bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation) was implemented by reading and understanding the snippet. After internalizing it, I have adapted and modified the code according to the requirement of our project.
- [React Bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation)'s code was used because I believed it to be an integral part of our project. The original code follows best practices in software development and design which gives me an opportunity to learn and understand frontend development concepts. Integrating and using optimally designed code from external source assists me in achieving the desired functionality and results. Additionally, it also significantly reduces development and design time.
- [React Bootstrap](https://react-bootstrap.netlify.app/docs/forms/validation)'s code was modified by understanding what it does and editing it depending on the requirements of our application. These changes encapsulated many modifications including but not limited to updating attributes, components, properties, additions, deletions, and integration.

_Lines 9 - 114_

```jsx
function DeleteAccountModal(props) {
  const { Formik } = formik;
  const schema = yup.object().shape({
    email: yup.string().email().required("Required"),
    password: yup.string().required("Required"),
  });

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete you account
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Alert variant="danger" key="danger">
          Warning! You are deleting your account on BlogIt.
        </Alert>
        <div>
          <h4>Please enter your email and password to confirm deletion</h4>
          <hr />
        </div>
        <div>
          <Formik
            validationSchema={schema}
            onSubmit={async (values) => {
              await new Promise((resolve) => setTimeout(resolve, 500));
              alert(JSON.stringify(values, null, 2));
            }}
            initialValues={{
              email: "",
              password: "",
            }}
          >
            {({
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
            }) => (
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
                      placeholder="Enter email"
                    />
                    <Form.Control.Feedback className="d-flex" type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationFormik04">
                  <Form.Label class="d-flex">Password</Form.Label>
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

                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit" size="lg">
                    Confirm
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
```

The code above was created adapting the code in [Modals | React Bootstrap](https://react-bootstrap.netlify.app/docs/components/modal).

```jsx
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

render(<App />);
```

- The code in [Modals | React Bootstrap](https://react-bootstrap.netlify.app/docs/components/modal) was implemented by reading and understanding the snippet. After internalizing it, I have adapted and modified the code according to the requirement of our project.
- [Modals | React Bootstrap](https://react-bootstrap.netlify.app/docs/components/modal)'s code was used because I believed it to be an integral part of our project. The original code follows best practices in software development and design which gives me an opportunity to learn and understand frontend development concepts. Integrating and using optimally designed code from external source assists me in achieving the desired functionality and results. Additionally, it also significantly reduces development and design time.
- [Modals | React Bootstrap](https://react-bootstrap.netlify.app/docs/components/modal)'s code was modified by understanding what it does and editing it depending on the requirements of our application. These changes encapsulated many modifications including but not limited to updating attributes, components, properties, additions, deletions, and integration.

### Faq.js:

*Lines 20 - 75:*

```jsx
<Accordion defaultActiveKey="0" alwaysOpen>
  <Accordion.Item eventKey="0">
    <Accordion.Header>
      <FontAwesomeIcon icon={faPen} className="faq-icon" />
      How do I create a new post?
    </Accordion.Header>
    <Accordion.Body>
      Click on the <strong>"Create Post"</strong> button on the top navigation bar. You'll be taken to a text editor where you can write and format your post. Once you're ready, hit "Publish" to make it live.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>
      <FontAwesomeIcon icon={faEdit} className="faq-icon" />
      Can I edit my post after publishing?
    </Accordion.Header>
    <Accordion.Body>
      <strong><u>Yes, you can edit your post at any time.</u></strong> Go to your profile, click on the post you want to edit, and then click on the "Edit" button.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>
      <FontAwesomeIcon icon={faComments} className="faq-icon" />
      How can I manage comments on my posts?
    </Accordion.Header>
    <Accordion.Body>
      You can manage comments by going to your post and viewing the comment section. From there, you can delete inappropriate comments or reply to engage with your readers.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>
      <FontAwesomeIcon icon={faCheckCircle} className="faq-icon" />
      What kind of content is allowed?
    </Accordion.Header>
    <Accordion.Body>
      We encourage a wide range of content, including tutorials, opinion pieces, and news. However, all content must adhere to our community guidelines, which prohibit spam, harassment, and offensive material.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>
      <FontAwesomeIcon icon={faUserPlus} className="faq-icon" />
      How do I follow other users?
    </Accordion.Header>
    <Accordion.Body>
      To follow another user, visit their profile and click on the <strong>"Follow"</strong> button. You’ll then see their posts in your feed.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5">
    <Accordion.Header>
      <FontAwesomeIcon icon={faUserCircle} className="faq-icon" />
      Can I customize my profile?
    </Accordion.Header>
    <Accordion.Body>
      <strong><u>Yes, you can customize your profile</u></strong> by clicking on your avatar in the top right corner and selecting <strong>"Edit Profile."</strong> You can change your bio, profile picture, and social links.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
```

**Author Attribution:**

The accordion component utilized in this Faq.js file leverages the [React Bootstrap library](https://react-bootstrap.netlify.app/). Specifically, the Accordion and Accordion.Item components were implemented to provide a user-friendly expandable question and answer format.  The source code for these components can be found within the React Bootstrap documentation.

**Explanation:**

- For the FAQ page, I used the React Bootstrap Accordion component to structure the page into a clear and interactive design. This component allows users to efficiently navigate through frequently asked questions by expanding and collapsing individual sections. Each question is presented within an Accordion.Header element, while the corresponding answer is housed within an Accordion.Body element. FontAwesome icons (faPen, faEdit, etc.) are also included within the headers to add a touch of visual interest.

- For this implementation, I referenced the "Always Open Example" provided in the React Bootstrap documentation,  which showcases an accordion component that remains perpetually expanded, ensuring all questions and answers are continuously visible. This aligns well with the intended functionality of an FAQ page.


### App.js

_Lines 20 - 40_

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route index element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/signup" element={<Signup />} />
    {/* User profiles can be accessed from /:username. Similar to dev.to */}
    <Route path="/user/:username" element={<UserProfile />} />
    <Route path="/blog/:id" element={<BlogPost />} />
    <Route path="/videos" element={<VideoFeed />} />
    <Route path="/videos/:id" element={<VideoPost />} />
    <Route path="/create-blog-post" element={<ComposeBlog />} />
    <Route path="/create-video-post" element={<ComposeVideo />} />
    <Route path="/contact" element={<ContactUs />} />
    <Route path="/settings" element={<Settings />} />
    <Route path="/bookmarks" element={<BookmarksPage />} />
    <Route path="/faq" element={<Faq />} />
    <Route path="/tags" element={<Tags />} />
  </Routes>
</BrowserRouter>
```

The code above was created adapting the code in [W3Schools - React Router](https://www.w3schools.com/react/react_router.asp).

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} />
    </Route>
  </Routes>
</BrowserRouter>
```

- The code in [W3Schools - React Router](https://www.w3schools.com/react/react_router.asp) was implemented by reading and understanding the snippet. After internalizing it, I have adapted and modified the code according to the requirement of our project.
- [W3Schools - React Router](https://www.w3schools.com/react/react_router.asp)'s code was used because I believed it to be an integral part of our project. The original code follows best practices in software development and design which gives me an opportunity to learn and understand frontend development concepts. Integrating and using optimally designed code from external source assists me in achieving the desired functionality and results. Additionally, it also significantly reduces development and design time.
- [W3Schools - React Router](https://www.w3schools.com/react/react_router.asp)'s code was modified by understanding what it does and editing it depending on the requirements of our application. These changes encapsulated many modifications including but not limited to updating attributes, components, properties, additions, deletions, and integration.

### birthday_icon.svg

The image file was taken from [Bootstrap](https://icons.getbootstrap.com/icons/cake2/).

### comment_icon.svg

The image file was taken from [Bootstrap](https://icons.getbootstrap.com/icons/chat/).

### community_icon.svg

The image file was taken from [Bootstrap](https://icons.getbootstrap.com/icons/people/).

### info_icon.svg

The image file was taken from [Bootstrap](https://icons.getbootstrap.com/icons/info-circle/).

### location_icon.svg

The image file was taken from [Bootstrap](https://icons.getbootstrap.com/icons/geo-alt-fill/).

### post_icon.svg

The image file was taken from [Bootstrap](https://icons.getbootstrap.com/icons/file-text/).

### bookmark-white.png

The image file was taken from [Flaticon](https://www.flaticon.com/).

### bookmark-black.png

The image file was taken from [Flaticon](https://www.flaticon.com/).

### Other boilerplate code

Boilerplate code was created and bootstrapped using the [Create React App](https://create-react-app.dev/) starter kit.

## Built With

- [ReactJS](https://react.dev/) - The web framework used
- [Bootstrap](https://react-bootstrap.netlify.app/) - Used for components and responsiveness
- [MaterialUI](https://mui.com/material-ui/) - Used for several components
- [FontAwesome](https://fontawesome.com/) - Used for icons
- [Coolors](https://coolors.co/383f51-dddbf1-3c4f76-d1beb0-ab9f9d) - To generate and share a color palette

## Acknowledgments

Special thanks to Professor Gabriella and the Teaching Assistant team of CSCI 5709 for their exceptional support, guidance and the timely responses.
