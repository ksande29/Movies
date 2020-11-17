export const indexPage = (req, res, next) => {
  res.render('layout', {content: 'index', title: 'Top 10 Movies'})
}

