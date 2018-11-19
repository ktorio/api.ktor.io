---
title: Principal - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.auth</a> / <a href="./-principal.html">Principal</a></div>

# Principal

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">Principal</span></code></div>

Marker interface indicating that a class represents an authenticated principal

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../io.ktor.auth.jwt/-j-w-t-principal/index.html">JWTPrincipal</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">JWTPrincipal</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./-principal.md"><span class="identifier">Principal</span></a></code></div>

Represents a JWT principal consist of the specified <a href="../io.ktor.auth.jwt/-j-w-t-principal/payload.html">payload</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-o-auth-access-token-response/index.html">OAuthAccessTokenResponse</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">OAuthAccessTokenResponse</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./-principal.md"><span class="identifier">Principal</span></a></code></div>

OAuth access token acquired from the server


</td>
</tr>
<tr>
<td markdown="1">

<a href="-user-id-principal/index.html">UserIdPrincipal</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">UserIdPrincipal</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./-principal.md"><span class="identifier">Principal</span></a></code></div>

Represents a simple user's principal identified by <a href="-user-id-principal/name.html">name</a>


</td>
</tr>
</tbody>
</table>
