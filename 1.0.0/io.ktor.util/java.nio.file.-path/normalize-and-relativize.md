---
title: normalizeAndRelativize - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util</a> / <a href="index.html">java.nio.file.Path</a> / <a href="./normalize-and-relativize.html">normalizeAndRelativize</a></div>

# normalizeAndRelativize

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">Path</span><span class="symbol">.</span><span class="identifier">normalizeAndRelativize</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">Path</span></code></div>

Remove all redundant <code>.</code> and <code>..</code> path elements. Leading <code>..</code> are also considered redundant.

