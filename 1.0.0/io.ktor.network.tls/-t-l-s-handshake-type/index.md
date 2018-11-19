---
title: TLSHandshakeType - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.tls</a> / <a href="./index.html">TLSHandshakeType</a></div>

# TLSHandshakeType

<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">TLSHandshakeType</span></code></div>

TLS handshake record type

### Enum Values

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-hello-request.html">HelloRequest</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-client-hello.html">ClientHello</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-server-hello.html">ServerHello</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-certificate.html">Certificate</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-server-key-exchange.html">ServerKeyExchange</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-certificate-request.html">CertificateRequest</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-server-done.html">ServerDone</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-certificate-verify.html">CertificateVerify</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-client-key-exchange.html">ClientKeyExchange</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-finished.html">Finished</a>


</td>
<td markdown="1">

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="code.html">code</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">code</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

numeric type code


</td>
</tr>
</tbody>
</table>

### Companion Object Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="by-code.html">byCode</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">byCode</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.network.tls.TLSHandshakeType.Companion$byCode(kotlin.Int)/code">code</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">TLSHandshakeType</span></a></code></div>

Find handshake type instance by it's numeric <a href="by-code.html#io.ktor.network.tls.TLSHandshakeType.Companion$byCode(kotlin.Int)/code">code</a> or fail


</td>
</tr>
</tbody>
</table>
