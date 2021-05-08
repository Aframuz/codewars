function match(candidate, job) {
   if (!candidate.minSalary || !job.maxSalary) {
      throw new Error("error!")
   } else if (candidate.minSalary * 0.9 <= job.maxSalary) {
      return true
   } else {
      return false
   }
}
