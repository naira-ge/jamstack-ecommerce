import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
      marginLeft: 10
    }
  },
  brand: {
    frontWeight: 'bold',
    fontSize: '1.5rem'
  },
  grow: {
    flexGrow: 1
  },
  main: {
    minHeight: '80vh'
  },
  footer: {
    textAlign: 'center'
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
    frontWeight: 'bold'
  },
  form: {
    maxWidth: 800,
    margin: '20vh auto',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.5)',
  }
});

export default useStyles;
