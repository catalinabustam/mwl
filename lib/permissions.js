// check that the userId specified owns the documents
anyDocument = function(userId, doc) {
  return doc && userId;
}

// check that the userId specified owns the documents
ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
}
