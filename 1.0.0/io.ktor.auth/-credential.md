---
title: Credential - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.auth</a> / <a href="./-credential.html">Credential</a></div>

# Credential

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">Credential</span></code></div>

Marker interface indicating that a class represents credentials for authentication

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-digest-credential/index.html">DigestCredential</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">DigestCredential</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./-credential.md"><span class="identifier">Credential</span></a></code></div>

Represents Digest credentials


</td>
</tr>
<tr>
<td markdown="1">

<a href="../io.ktor.auth.jwt/-j-w-t-credential/index.html">JWTCredential</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">JWTCredential</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./-credential.md"><span class="identifier">Credential</span></a></code></div>

Represents a JWT credential consist of the specified <a href="../io.ktor.auth.jwt/-j-w-t-credential/payload.html">payload</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-user-password-credential/index.html">UserPasswordCredential</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">UserPasswordCredential</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./-credential.md"><span class="identifier">Credential</span></a></code></div>

Represents a simple user <a href="-user-password-credential/name.html">name</a> and <a href="-user-password-credential/password.html">password</a> credential pair


</td>
</tr>
</tbody>
</table>
