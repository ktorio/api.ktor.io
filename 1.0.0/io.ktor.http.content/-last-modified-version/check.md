---
title: LastModifiedVersion.check - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.content</a> / <a href="index.html">LastModifiedVersion</a> / <a href="./check.html">check</a></div>

# check

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">check</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content.LastModifiedVersion$check(io.ktor.http.Headers)/requestHeaders">requestHeaders</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="../-version-check-result/index.html"><span class="identifier">VersionCheckResult</span></a></code></div>

Overrides <a href="../-version/check.html">Version.check</a>

**Return**
<a href="../-version-check-result/-o-k.html">VersionCheckResult.OK</a> if all header pass or there was no headers in the request,
<a href="../-version-check-result/-n-o-t_-m-o-d-i-f-i-e-d.html">VersionCheckResult.NOT_MODIFIED</a> for If-Modified-Since,
<a href="../-version-check-result/-p-r-e-c-o-n-d-i-t-i-o-n_-f-a-i-l-e-d.html">VersionCheckResult.PRECONDITION_FAILED</a> for If-Unmodified*Since

