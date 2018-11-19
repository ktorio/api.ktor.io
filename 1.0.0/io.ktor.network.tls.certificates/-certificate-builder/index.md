---
title: CertificateBuilder - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.tls.certificates</a> / <a href="./index.html">CertificateBuilder</a></div>

# CertificateBuilder

<div class="signature"><code><span class="keyword">class </span><span class="identifier">CertificateBuilder</span></code></div>

Builder for certificate

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="days-valid.html">daysValid</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">daysValid</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a></code></div>

Number of days the certificate is valid


</td>
</tr>
<tr>
<td markdown="1">

<a href="hash.html">hash</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">lateinit</span> <span class="keyword">var </span><span class="identifier">hash</span><span class="symbol">: </span><a href="../../io.ktor.network.tls.extensions/-hash-algorithm/index.html"><span class="identifier">HashAlgorithm</span></a></code></div>

Certificate hash algorithm (required)


</td>
</tr>
<tr>
<td markdown="1">

<a href="key-size-in-bits.html">keySizeInBits</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">keySizeInBits</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Certificate key size in bits


</td>
</tr>
<tr>
<td markdown="1">

<a href="password.html">password</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">lateinit</span> <span class="keyword">var </span><span class="identifier">password</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Certificate password


</td>
</tr>
<tr>
<td markdown="1">

<a href="sign.html">sign</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">lateinit</span> <span class="keyword">var </span><span class="identifier">sign</span><span class="symbol">: </span><a href="../../io.ktor.network.tls.extensions/-signature-algorithm/index.html"><span class="identifier">SignatureAlgorithm</span></a></code></div>

Certificate signature algorithm (required)


</td>
</tr>
</tbody>
</table>
