const container: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
  borderTopRightRadius: 60,
  borderBottomRightRadius: 60,
  backgroundColor: '#CAF0F8'
};

const titleText: React.CSSProperties = {
  fontSize: 40,
  color: '#0077B6',
  fontWeight: 'bold'
};

const subtitleText: React.CSSProperties = {
  fontSize: 24,
  color: '#00B4D8',
  fontWeight: 'bold'
};

export default { container, titleText, subtitleText };
