---
title: AuthenticationFailedCause - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth</a> / <a href="./index.html">AuthenticationFailedCause</a></div>

# AuthenticationFailedCause

<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">AuthenticationFailedCause</span></code></div>

Represents a cause for authentication challenge request

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-error/index.html">Error</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">Error</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">AuthenticationFailedCause</span></a></code></div>

Represents a case when authentication mechanism failed


</td>
</tr>
<tr>
<td markdown="1">

<a href="-invalid-credentials.html">InvalidCredentials</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">InvalidCredentials</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">AuthenticationFailedCause</span></a></code></div>

Represents a case when invalid credentials were provided


</td>
</tr>
<tr>
<td markdown="1">

<a href="-no-credentials.html">NoCredentials</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">NoCredentials</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">AuthenticationFailedCause</span></a></code></div>

Represents a case when no credentials were provided


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-error/index.html">Error</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">Error</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">AuthenticationFailedCause</span></a></code></div>

Represents a case when authentication mechanism failed


</td>
</tr>
<tr>
<td markdown="1">

<a href="-invalid-credentials.html">InvalidCredentials</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">InvalidCredentials</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">AuthenticationFailedCause</span></a></code></div>

Represents a case when invalid credentials were provided


</td>
</tr>
<tr>
<td markdown="1">

<a href="-no-credentials.html">NoCredentials</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">NoCredentials</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">AuthenticationFailedCause</span></a></code></div>

Represents a case when no credentials were provided


</td>
</tr>
</tbody>
</table>
