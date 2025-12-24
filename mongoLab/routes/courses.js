const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');


function coursesCollection(req) {
  return req.app.locals.db.collection('courses');
}


router.post('/', async (req, res) => {
  try {
    const result = await coursesCollection(req).insertOne(req.body);
    res.status(201).json({ _id: result.insertedId, ...req.body });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create course' });
  }
});


router.get('/', async (req, res) => {
  try {
    const courses = await coursesCollection(req).find().toArray();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const course = await coursesCollection(req).findOne({
      _id: new ObjectId(req.params.id)
    });

    if (!course) return res.status(404).json({ error: 'Course not found' });

    res.status(200).json(course);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch course' });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const result = await coursesCollection(req).updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    );

    if (result.matchedCount === 0)
      return res.status(404).json({ error: 'Course not found' });

    res.json({ message: 'Course updated successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update course' });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const result = await coursesCollection(req).deleteOne({
      _id: new ObjectId(req.params.id)
    });

    if (result.deletedCount === 0)
      return res.status(404).json({ error: 'Course not found' });

    res.json({ message: 'Course deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete course' });
  }
});


module.exports = router;
