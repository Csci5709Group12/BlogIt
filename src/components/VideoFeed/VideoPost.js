
import { useParams } from "react-router-dom";
import "./VideoFeed.css";
import { Card } from 'react-bootstrap';
import AppNavbar from "../Navbar/Navbar";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import "./VideoPost.css";
import { useEffect, useState } from "react";

function VideoPost() {
  const { id } = useParams();

  const [videoUrl, setVideoUrl] = useState("");

  const blogContent = {
    1: {
      image: "https://t4.ftcdn.net/jpg/03/96/98/33/360_F_396983381_AcuGFHQbNn7D9eercXFpOecN7d7B5F66.jpg",
      title: "Video Post 1",
      content: `<h2>Lorem Ipsum</h2>
      <p>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Nullam vel felis eget nunc scelerisque interdum. 
      Sed <em>tempus</em> condimentum eros, non viverra urna <u>hendrerit ac</u>. Nulla facilisi. Morbi varius, <a href="#">odio id tincidunt bibendum</a>, 
      nisl lectus <strong>aliquet sapien</strong>, non auctor justo libero nec justo.</p>
      <h3>Subheading</h3>
      <p>Praesent <strong>consequat</strong> eros nec nibh sollicitudin, a scelerisque <u>leo molestie</u>. 
      Duis <em>posuere, diam in cursus vehicula, arcu magna egestas magna</em>, nec luctus leo libero nec nunc. 
      Vestibulum <a href="#">volutpat</a> diam ut nunc lacinia, et suscipit justo pharetra.</p>
      <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Sed do eiusmod tempor incididunt</li>
      </ul>
      <blockquote>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."</p>
      </blockquote>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos 
      qui ratione voluptatem sequi nesciunt.</p>`,
      tags: "#tag1, #tag2",
      video: "gs://blogit-group12.appspot.com/videos/What is Git_ Explained in 2 Minutes!.mp4"
    },
    2: {
      image: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/5992700/og_image/optimized/1005_Design-Patterns-in-React_Cover-9181bdf0d728b73804e11b6344434b0c.png",
      title: "Video Post 2",
      content: `<h2>Lorem Ipsum</h2>
      <p>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Nullam vel felis eget nunc scelerisque interdum. 
      Sed <em>tempus</em> condimentum eros, non viverra urna <u>hendrerit ac</u>. Nulla facilisi. Morbi varius, <a href="#">odio id tincidunt bibendum</a>, 
      nisl lectus <strong>aliquet sapien</strong>, non auctor justo libero nec justo.</p>
      <h3>Subheading</h3>
      <p>Praesent <strong>consequat</strong> eros nec nibh sollicitudin, a scelerisque <u>leo molestie</u>. 
      Duis <em>posuere, diam in cursus vehicula, arcu magna egestas magna</em>, nec luctus leo libero nec nunc. 
      Vestibulum <a href="#">volutpat</a> diam ut nunc lacinia, et suscipit justo pharetra.</p>
      <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Sed do eiusmod tempor incididunt</li>
      </ul>
      <blockquote>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."</p>
      </blockquote>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos 
      qui ratione voluptatem sequi nesciunt.</p>`,
      tags: "#tag1, #tag2",
      video: "gs://blogit-group12.appspot.com/videos/Kubernetes Explained in 100 Seconds.mp4"
    },
    3: {
      image: "https://t4.ftcdn.net/jpg/03/96/98/33/360_F_396983381_AcuGFHQbNn7D9eercXFpOecN7d7B5F66.jpg",
      title: "Video Post 3",
      content: `<h2>Lorem Ipsum</h2>
      <p>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Nullam vel felis eget nunc scelerisque interdum. 
      Sed <em>tempus</em> condimentum eros, non viverra urna <u>hendrerit ac</u>. Nulla facilisi. Morbi varius, <a href="#">odio id tincidunt bibendum</a>, 
      nisl lectus <strong>aliquet sapien</strong>, non auctor justo libero nec justo.</p>
      <h3>Subheading</h3>
      <p>Praesent <strong>consequat</strong> eros nec nibh sollicitudin, a scelerisque <u>leo molestie</u>. 
      Duis <em>posuere, diam in cursus vehicula, arcu magna egestas magna</em>, nec luctus leo libero nec nunc. 
      Vestibulum <a href="#">volutpat</a> diam ut nunc lacinia, et suscipit justo pharetra.</p>
      <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Sed do eiusmod tempor incididunt</li>
      </ul>
      <blockquote>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."</p>
      </blockquote>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos 
      qui ratione voluptatem sequi nesciunt.</p>`,
      tags: "#tag1, #tag3",
      video: "gs://blogit-group12.appspot.com/videos/React in 100 Seconds.mp4"
    },
    4: {
      image: "https://t4.ftcdn.net/jpg/03/96/98/33/360_F_396983381_AcuGFHQbNn7D9eercXFpOecN7d7B5F66.jpg",
      title: "Video Post 3",
      content: `<h2>Lorem Ipsum</h2>
      <p>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Nullam vel felis eget nunc scelerisque interdum. 
      Sed <em>tempus</em> condimentum eros, non viverra urna <u>hendrerit ac</u>. Nulla facilisi. Morbi varius, <a href="#">odio id tincidunt bibendum</a>, 
      nisl lectus <strong>aliquet sapien</strong>, non auctor justo libero nec justo.</p>
      <h3>Subheading</h3>
      <p>Praesent <strong>consequat</strong> eros nec nibh sollicitudin, a scelerisque <u>leo molestie</u>. 
      Duis <em>posuere, diam in cursus vehicula, arcu magna egestas magna</em>, nec luctus leo libero nec nunc. 
      Vestibulum <a href="#">volutpat</a> diam ut nunc lacinia, et suscipit justo pharetra.</p>
      <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Sed do eiusmod tempor incididunt</li>
      </ul>
      <blockquote>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."</p>
      </blockquote>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos 
      qui ratione voluptatem sequi nesciunt.</p>`,
      tags: "#tag1, #tag3",
      video: "gs://blogit-group12.appspot.com/videos/PyTorch in 100 Seconds.mp4"
    },
    5: {
      image: "https://t4.ftcdn.net/jpg/03/96/98/33/360_F_396983381_AcuGFHQbNn7D9eercXFpOecN7d7B5F66.jpg",
      title: "Video Post 3",
      content: `<h2>Lorem Ipsum</h2>
      <p>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Nullam vel felis eget nunc scelerisque interdum. 
      Sed <em>tempus</em> condimentum eros, non viverra urna <u>hendrerit ac</u>. Nulla facilisi. Morbi varius, <a href="#">odio id tincidunt bibendum</a>, 
      nisl lectus <strong>aliquet sapien</strong>, non auctor justo libero nec justo.</p>
      <h3>Subheading</h3>
      <p>Praesent <strong>consequat</strong> eros nec nibh sollicitudin, a scelerisque <u>leo molestie</u>. 
      Duis <em>posuere, diam in cursus vehicula, arcu magna egestas magna</em>, nec luctus leo libero nec nunc. 
      Vestibulum <a href="#">volutpat</a> diam ut nunc lacinia, et suscipit justo pharetra.</p>
      <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Sed do eiusmod tempor incididunt</li>
      </ul>
      <blockquote>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."</p>
      </blockquote>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos 
      qui ratione voluptatem sequi nesciunt.</p>`,
      tags: "#tag1, #tag3",
      video: "gs://blogit-group12.appspot.com/videos/Best of Kevin Mitnick_ My First Social Engineering Hack.mp4"
    },
    6: {
      image: "https://t4.ftcdn.net/jpg/03/96/98/33/360_F_396983381_AcuGFHQbNn7D9eercXFpOecN7d7B5F66.jpg",
      title: "Video Post 3",
      content: `<h2>Lorem Ipsum</h2>
      <p>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Nullam vel felis eget nunc scelerisque interdum. 
      Sed <em>tempus</em> condimentum eros, non viverra urna <u>hendrerit ac</u>. Nulla facilisi. Morbi varius, <a href="#">odio id tincidunt bibendum</a>, 
      nisl lectus <strong>aliquet sapien</strong>, non auctor justo libero nec justo.</p>
      <h3>Subheading</h3>
      <p>Praesent <strong>consequat</strong> eros nec nibh sollicitudin, a scelerisque <u>leo molestie</u>. 
      Duis <em>posuere, diam in cursus vehicula, arcu magna egestas magna</em>, nec luctus leo libero nec nunc. 
      Vestibulum <a href="#">volutpat</a> diam ut nunc lacinia, et suscipit justo pharetra.</p>
      <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Sed do eiusmod tempor incididunt</li>
      </ul>
      <blockquote>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."</p>
      </blockquote>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos 
      qui ratione voluptatem sequi nesciunt.</p>`,
      tags: "#tag1, #tag3",
      video: "gs://blogit-group12.appspot.com/videos/What is DevOps_ (explained in a two minute cartoon).mp4"
    },
  };

  const post = blogContent[id];

  // const storage = getStorage();
  // getDownloadURL(ref(storage, post.video))
  //   .then((url) => {
  //     console.log(url);
  //     setVideoUrl(url);
  //   });

  useEffect(() => {
    const fetchVideoUrl = async () => {
      if (post && post.video) {
        try {
          const storageRef = ref(storage, post.video);
          const url = await getDownloadURL(storageRef);
          console.log(url);
          setVideoUrl(url);
        } catch (error) {
          console.error("Error fetching video URL: ", error);
        }
      }
    };
  
    fetchVideoUrl();
  }, [post, storage]);  // Add `storage` to the dependency array

  if (!post) {
    return <div>Video post not found</div>;
  }

  return (
    <div>
      <AppNavbar />
      <div className="center-card">
        <Card className="my-4 card">
          <Card.Body>
            <Card.Title><h1><strong>{post.title}</strong></h1></Card.Title>
            <Card.Text><i>{post.tags}</i></Card.Text>
            {videoUrl ? (
              <video width="100%" height="auto" controls>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div>Loading video...</div>
            )}
            <Card.Text dangerouslySetInnerHTML={{ __html: post.content }} />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default VideoPost;
