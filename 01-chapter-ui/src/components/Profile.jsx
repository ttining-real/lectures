import Avatar from './Avatar';

function Profile() {
  return (
    <>
      <Avatar
        person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }}
        size={150}
      />
      <Avatar
        person={{ name: 'Aklilu Lemma', imageId: 'OKS67lh' }}
        size={100}
      />
      <Avatar person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }} size={50} />
    </>
  );
}

export default Profile;
