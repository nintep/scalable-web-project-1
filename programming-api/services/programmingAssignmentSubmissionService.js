import { sql } from "../database/database.js";

const findAllSubmissions = async () => {
  return await sql`SELECT * FROM programming_assignment_submissions;`;
};

const findAllForUser = async (userId) => {
  return await sql`SELECT * FROM programming_assignment_submissions WHERE user_uuid = ${userId};`;
}

const findAllForAssignment = async (assignmentId) => {
  return await sql`SELECT * FROM programming_assignment_submissions WHERE programming_assignment_id = ${assignmentId};`;
}

const addSubmission = async (submission) => {
    return await sql`INSERT INTO programming_assignment_submissions (programming_assignment_id, code, user_uuid) 
                        VALUES (${submission.assignmentID}, ${submission.code}, ${submission.user}) RETURNING id;`
}

const addGraderResultsToSubmission = async (submissionId, grader_feedback, correct) => {
    return await sql`UPDATE programming_assignment_submissions 
                      SET grader_feedback = ${grader_feedback},
                        correct = ${correct},
                        status = ${"processed"}
                      WHERE id = ${submissionId}`
}
const clearSubmissions = async () => {
  return await sql`DELETE FROM programming_assignment_submissions`;
}

export { findAllSubmissions, findAllForUser, findAllForAssignment, addGraderResultsToSubmission, addSubmission, clearSubmissions };