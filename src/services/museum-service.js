export default class MuseumService {
  _apiParams = 'key=8Y1mYOsg&format=json&imgonly=true';
  _apiBase = 'https://www.rijksmuseum.nl/api/en/';

  _transformCollection = data => {
    const collection = data.map(item => {
      return {
        id: item.objectNumber,
        title: item.longTitle,
        imageUrl: item.webImage.url
      };
    });
    return collection;
  };

  _transformDetails = data => {
    return {
      id: data.objectNumber,
      title: data.title,
      description: data.label.description || data.description,
      imageUrl: data.webImage.url
    };
  };

  getCollection = async (perPage, activePage, orderBy = '', keyWord = '') => {
    const res = await fetch(
      `${
        this._apiBase
      }collection?ps=${perPage}&p=${activePage}&q=${keyWord}&s=${orderBy}&${
        this._apiParams
      }`
    );

    if (res.status !== 200) {
      throw new Error('Something went wrong.');
    }

    const data = await res.json();
    return this._transformCollection(data.artObjects);
  };

  getDetails = async objectId => {
    try {
      const res = await fetch(
        `${this._apiBase}collection/${objectId}?${this._apiParams}`
      );

      if (res.status !== 200) {
        throw new Error('Something went wrong.');
      }

      const data = await res.json();
      console.log(data);
      return this._transformDetails(data.artObject);
    } catch {
      throw new Error();
    }
  };
}
