import React from 'react'

export default function firstPost({data}) {
  return (
    <div>
            <div  style={{margin: 5, background: '#DEE4E5', width: '90%', borderRadius: '2px'}}>
              <h3 style={{margin: 5, textAlign:'center'}}>
                {data.id}---{data.title}
              </h3>
              <p style={{padding: '1rem', textAlign:'center'}}>{data.body}</p>
            
            </div>
    </div>
  )
}


export async function getStaticPaths() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const data = await res.json();
    const paths = data.map(({ id }) => ({ params: { id: `${id}` } }));
    console.log(paths)
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + params.id);
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
