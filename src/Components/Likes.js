import { Image1,
  Container,
  Like,
  Overlay,
  Paragraph,
  Header, } from "./comp.components";

const Likes = ({ setLikesModal, likes }) => {
  return (
    <Overlay onClick={() => setLikesModal(false)}>
      <Container className="p-2" onClick={(e) => e.stopPropagation()}>
        <Header>
          <Paragraph>Liked by {likes.length} people</Paragraph>
        </Header>
        {likes.map((like) => (
          <Like to={`/users/${like._id}`}>
            <Image1 width="24px" height="24px" src={like.profile_photo} />
            <Paragraph>
              {like.display_name || like.first_name + " " + like.last_name}
            </Paragraph>
          </Like>
        ))}
      </Container>
    </Overlay>
  );
};

export default Likes;
