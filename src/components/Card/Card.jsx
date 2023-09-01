import { Head } from '../Head/Head';
import data from '../../data.json';
import { Container, Photo } from './Card.styled';

// import clsx from 'clsx';

// import css from './Card.module.css';



export const Card = ({isOnline, isOffline}) => {
  return data.map((photo) => {
    return (
      <Container
        key={photo.id} isOnline={isOnline}
      >
        
        <Photo
          src={photo.url}
          alt={photo.title}/>
        
        <div>
          <h5>{photo.title}</h5>
          <Head id='id-123' clas='card-title' />
          
          <a href="http">Go somewhere</a>
        </div>
      </Container>
    )
  })
}

// modules

// export const Card = ({isOnline, isOffline}) => {
//   return data.map((photo) => {
//     return (
//       <div
//         key={photo.id}
//         // className={
//         //   isOnline
//         //     ? `${css.main} ${css.red}`
//         //     : `${css.main} ${css.blue}`}
        
//         className={clsx(
//           css.main,
//           isOnline ? css.red : css.blue)}

//         // className={
//         //   clsx(
//         //     css.main, {
//         //       [css.red]: isOnline,
//         //       [css.blue]: isOffline,
//         //     }
//         //   )}
//       >
        
//         <img
//           src={photo.url}
//           alt={photo.title}
//           className={css.photo}/>
        
//         <div>
//           <h5>{photo.title}</h5>
//           <Head id='id-123' clas='card-title' />
          
//           <a href="http">Go somewhere</a>
//         </div>
//       </div>
//     )
//   })
// }


// bootstrap

// export const Card = () => {
//   return data.map((photo) => {
//     return (
//       <div
//         key={photo.id}
//         className="card"
//         style={{ width: '18rem' }}>
//         <img src={photo.url} className="card-img-top" alt={photo.title} />
//         <div className="card-body">
//           <h5 className="card-title">{photo.title}</h5>
//           <Head id='id-123' clas='card-title'/>
//           <a href="http" className="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//     )
//   })
// }