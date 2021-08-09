import env from '../consts';

async function fetchCmsAPI(query, { variables } = {}) {
    const res = await fetch(env.API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.DATOCMS_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
  
    const json = await res.json();
    if (json.errors) {
      throw new Error('Failed to fetch API');
    }
  
    return json.data;
  }
  

  export async function getAllCategories() {
    const data = await fetchCmsAPI(`
    {
      allCategories {
        id
        title
        indicators {
          id
          title
          url
          icon {
            name
          }
          description
        }
        color {
          hex
        }
      }
    }
    `);
    return data.allCategories;
  }