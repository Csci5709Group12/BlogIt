import { useParams } from "react-router-dom";
import "./BlogFeed.css";
import { Card } from "react-bootstrap";
import AppNavbar from "../Navbar/Navbar";
import "./BlogPost.css";

function BlogPost() {
  const { id } = useParams();

  const blogContent = {
    1: {
      image:
        "https://t4.ftcdn.net/jpg/03/96/98/33/360_F_396983381_AcuGFHQbNn7D9eercXFpOecN7d7B5F66.jpg",
      title: "Blog Post 1",
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
    },
    2: {
      image:
        "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/5992700/og_image/optimized/1005_Design-Patterns-in-React_Cover-9181bdf0d728b73804e11b6344434b0c.png",
      title: "Blog Post 2",
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
    },
    3: {
      image:
        "https://t4.ftcdn.net/jpg/03/96/98/33/360_F_396983381_AcuGFHQbNn7D9eercXFpOecN7d7B5F66.jpg",
      title: "Blog Post 3",
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
    },
  };

  const post = blogContent[id];

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <div>
      <AppNavbar />
      <div className="center-card">
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
      </div>
    </div>
  );
}

export default BlogPost;
