---
title: VersionCheckResult - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.content</a> / <a href="./index.html">VersionCheckResult</a></div>

# VersionCheckResult

<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">VersionCheckResult</span></code></div>

Represent result of the version comparison between content being sent and HTTP request.

### Parameters

<code>statusCode</code> - represents <a href="../../io.ktor.http/-http-status-code/index.html">HttpStatusCode</a> associated with the result.

### Enum Values

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-o-k.html">OK</a>


</td>
<td markdown="1">

Indicates that content needs to be sent to recipient.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-n-o-t_-m-o-d-i-f-i-e-d.html">NOT_MODIFIED</a>


</td>
<td markdown="1">

Indicates that content has not modified according to headers sent by client.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-p-r-e-c-o-n-d-i-t-i-o-n_-f-a-i-l-e-d.html">PRECONDITION_FAILED</a>


</td>
<td markdown="1">

One or more conditions given in the request header fields evaluated to false.


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="status-code.html">statusCode</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">statusCode</span><span class="symbol">: </span><a href="../../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a></code></div>

represents <a href="../../io.ktor.http/-http-status-code/index.html">HttpStatusCode</a> associated with the result.


</td>
</tr>
</tbody>
</table>
