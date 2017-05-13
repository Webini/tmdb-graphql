module.exports = (api, imageLanguage, language) => { 
  
  return (source, args, context, info) => {
    const list = source[info.fieldName];
    if (!list || !list.length) {
      return list;
    }

    return list.map((item) => {
      const person = {
        name: item.name || null,
        id: item.id || null,
        profile_path: item.profile_path || null
      };

      delete item.name;
      delete item.id;
      delete item.profile_path;

      item.id = item.credit_id;
      delete item.credit_id;

      item.person = (person.id ? person : null);
      
      return item;
    });
  };
};