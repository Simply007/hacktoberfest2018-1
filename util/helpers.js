const debug = require('debug')('hacktoberfest2018:server');

const afterPush = err => {
  if (err) {
    debug('[FIREBASE] Error while pushing new entry: ' + err, 1);
  } else {
    debug('[FIREBASE] DB Push Success');
  }
};

const paginate = async (octokit, method, parameters) => {
  let response = await method({ ...parameters, per_page: 100, page: 1 });
  let { data } = response;
  while (octokit.hasNextPage(response)) {
    response = await octokit.getNextPage(response);
    data = data.concat(response.data);
  }
  return data;
};

module.exports = {
  afterPush,
  paginate
};
