export function distance(a: string, b: string) {
  const da = Array.from(a.toLowerCase());
  const db = Array.from(b.toLowerCase());
  const m = da.length, n = db.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = da[i - 1] === db[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
      if (i > 1 && j > 1 && da[i - 1] === db[j - 2] && da[i - 2] === db[j - 1]) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 2][j - 2] + cost);
      }
    }
  }
  return dp[m][n];
}

export function bestMatch(query: string, choices: { q: string; a: string }[]) {
  if (!query.trim()) return null;
  let best = { score: Infinity, item: null as null | { q: string; a: string } };
  for (const c of choices) {
    const d = distance(query, c.q);
    const prefix = c.q.toLowerCase().startsWith(query.toLowerCase()) ? -0.5 : 0;
    const score = d + prefix;
    if (score < best.score) best = { score, item: c };
  }
  return best.item;
}