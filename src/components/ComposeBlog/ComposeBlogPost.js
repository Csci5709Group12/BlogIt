import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactQuill from 'react-quill';
import { Autocomplete, TextField, Chip } from '@mui/material';
import { ToastContainer, toast } from "react-toastify";
import CreatePostNavbar from '../Navbar/CreatePostNavbar';

import 'react-quill/dist/quill.snow.css';
import "react-toastify/dist/ReactToastify.css";
import './ComposeBlogPost.css';
import '../common.css';

function ComposeBlog() {
  const [value, setValue] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    document.title = "Compose Blog Post";
  }, []);

  const tags = ["web", "java", "react", "android", "programming"];

  const removeImage = () => {
    setSelectedImage(null);
  };

  const handlePublish = () => {
    let hasError = false;

    if (!title.trim()) {
      setTitleError("Title cannot be blank or contain only spaces.");
      hasError = true;
    } else {
      setTitleError("");
    }

    if (!value.trim() || value === '<p><br></p>') {
      setContentError("Content cannot be blank or contain only spaces.");
      hasError = true;
    } else {
      setContentError("");
    }

    if (!hasError) {
      // Publish the post
      toast.success("Blog Post Published Successfully");
      console.log("Publishing post...");
    }
  };

  const handleSaveDraft = () => {
    let hasError = false;

    if (!title.trim()) {
      setTitleError("Title cannot be blank or contain only spaces.");
      hasError = true;
    } else {
      setTitleError("");
    }

    if (!value.trim() || value === '<p><br></p>') {
      setContentError("Content cannot be blank or contain only spaces.");
      hasError = true;
    } else {
      setContentError("");
    }

    if (!hasError) {
      // Publish the post
      toast.success("Blog Post Saved Successfully");
      console.log("Saving post...");
    }
  };

  const handleTagsChange = (event, newValue) => {
    if (!Array.isArray(newValue)) {
      newValue = [newValue];
    }
    const formattedTags = newValue.map(tag => tag.startsWith('#') ? tag : `#${tag}`);
    setSelectedTags(formattedTags);
  };

  return (
    <div className="compose-blog-post-container">
      <CreatePostNavbar />
      <Card className="title-card">
        <Card.Body>
          <Form className="post-form">
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <Button
              variant="outline-primary"
              className="cover-btn"
              onClick={() => document.getElementById('fileInput').click()}
            >
              Add a cover image
            </Button>
            {selectedImage && (
              <div className="image-container">
                <img src={selectedImage} alt="Selected" className="thumbnail" />
                <div>
                  <Button variant="danger" style={{ margin: "10px" }} onClick={removeImage}>Remove</Button>
                  <Button variant="secondary" onClick={() => document.getElementById('fileInput').click()}>Change</Button>
                </div>
              </div>
            )}
            <Form.Control
              className="title-form"
              style={{ fontWeight: 'bold' }}
              size="lg"
              type="text"
              placeholder="New post title here..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              isInvalid={!!titleError}
            />
            <Form.Control.Feedback type="invalid">
              {titleError}
            </Form.Control.Feedback>

            <Autocomplete
              id="tags-autocomplete"
              freeSolo
              multiple
              options={tags.map((option) => `#${option}`)}
              value={selectedTags}
              onChange={handleTagsChange}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    key={index}
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Add a tag here..."
                  fullWidth
                />
              )}
              sx={{
                width: "100%",
                marginBottom: "10px",
                '& .MuiAutocomplete-listbox': {
                  bgcolor: '#DDDBF1',
                },
              }}
            />

            <ReactQuill
              className="editor"
              theme="snow"
              value={value}
              onChange={setValue}
              placeholder="Write your post content here..."
            />
            {contentError && <div className="error-message">{contentError}</div>}
            <div className="button-container">
              <Button variant="outline-primary" className="publish-btn" onClick={handlePublish}>
                Publish
              </Button>
              <Button variant="outline-primary" className="save-draft-btn" onClick={handleSaveDraft}>
                Save Draft
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <ToastContainer />
    </div>
  );
}

export default ComposeBlog;
