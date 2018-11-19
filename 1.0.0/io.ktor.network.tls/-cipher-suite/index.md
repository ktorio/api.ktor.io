---
title: CipherSuite - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.tls</a> / <a href="./index.html">CipherSuite</a></div>

# CipherSuite

<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">CipherSuite</span></code></div>

Represents a TLS cipher suite

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">CipherSuite</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls.CipherSuite$<init>(kotlin.Short, kotlin.String, kotlin.String, io.ktor.network.tls.SecretExchangeType, kotlin.String, kotlin.Int, kotlin.Int, kotlin.Int, kotlin.Int, kotlin.String, kotlin.Int, io.ktor.network.tls.extensions.HashAlgorithm, io.ktor.network.tls.extensions.SignatureAlgorithm)/code">code</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-short/index.html"><span class="identifier">Short</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls.CipherSuite$<init>(kotlin.Short, kotlin.String, kotlin.String, io.ktor.network.tls.SecretExchangeType, kotlin.String, kotlin.Int, kotlin.Int, kotlin.Int, kotlin.Int, kotlin.String, kotlin.Int, io.ktor.network.tls.extensions.HashAlgorithm, io.ktor.network.tls.extensions.SignatureAlgorithm)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls.CipherSuite$<init>(kotlin.Short, kotlin.String, kotlin.String, io.ktor.network.tls.SecretExchangeType, kotlin.String, kotlin.Int, kotlin.Int, kotlin.Int, kotlin.Int, kotlin.String, kotlin.Int, io.ktor.network.tls.extensions.HashAlgorithm, io.ktor.network.tls.extensions.SignatureAlgorithm)/openSSLName">openSSLName</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls.CipherSuite$<init>(kotlin.Short, kotlin.String, kotlin.String, io.ktor.network.tls.SecretExchangeType, kotlin.String, kotlin.Int, kotlin.Int, kotlin.Int, kotlin.Int, kotlin.String, kotlin.Int, io.ktor.network.tls.extensions.HashAlgorithm, io.ktor.network.tls.extensions.SignatureAlgorithm)/exchangeType">exchangeType</span><span class="symbol">:</span>&nbsp;<a href="../-secret-exchange-type/index.html"><span class="identifier">SecretExchangeType</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls.CipherSuite$<init>(kotlin.Short, kotlin.String, kotlin.String, io.ktor.network.tls.SecretExchangeType, kotlin.String, kotlin.Int, kotlin.Int, kotlin.Int, kotlin.Int, kotlin.String, kotlin.Int, io.ktor.network.tls.extensions.HashAlgorithm, io.ktor.network.tls.extensions.SignatureAlgorithm)/jdkCipherName">jdkCipherName</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls.CipherSuite$<init>(kotlin.Short, kotlin.String, kotlin.String, io.ktor.network.tls.SecretExchangeType, kotlin.String, kotlin.Int, kotlin.Int, kotlin.Int, kotlin.Int, kotlin.String, kotlin.Int, io.ktor.network.tls.extensions.HashAlgorithm, io.ktor.network.tls.extensions.SignatureAlgorithm)/keyStrength">keyStrength</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls.CipherSuite$<init>(kotlin.Short, kotlin.String, kotlin.String, io.ktor.network.tls.SecretExchangeType, kotlin.String, kotlin.Int, kotlin.Int, kotlin.Int, kotlin.Int, kotlin.String, kotlin.Int, io.ktor.network.tls.extensions.HashAlgorithm, io.ktor.network.tls.extensions.SignatureAlgorithm)/fixedIvLength">fixedIvLength</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls.CipherSuite$<init>(kotlin.Short, kotlin.String, kotlin.String, io.ktor.network.tls.SecretExchangeType, kotlin.String, kotlin.Int, kotlin.Int, kotlin.Int, kotlin.Int, kotlin.String, kotlin.Int, io.ktor.network.tls.extensions.HashAlgorithm, io.ktor.network.tls.extensions.SignatureAlgorithm)/ivLength">ivLength</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls.CipherSuite$<init>(kotlin.Short, kotlin.String, kotlin.String, io.ktor.network.tls.SecretExchangeType, kotlin.String, kotlin.Int, kotlin.Int, kotlin.Int, kotlin.Int, kotlin.String, kotlin.Int, io.ktor.network.tls.extensions.HashAlgorithm, io.ktor.network.tls.extensions.SignatureAlgorithm)/cipherTagSizeInBytes">cipherTagSizeInBytes</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls.CipherSuite$<init>(kotlin.Short, kotlin.String, kotlin.String, io.ktor.network.tls.SecretExchangeType, kotlin.String, kotlin.Int, kotlin.Int, kotlin.Int, kotlin.Int, kotlin.String, kotlin.Int, io.ktor.network.tls.extensions.HashAlgorithm, io.ktor.network.tls.extensions.SignatureAlgorithm)/macName">macName</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls.CipherSuite$<init>(kotlin.Short, kotlin.String, kotlin.String, io.ktor.network.tls.SecretExchangeType, kotlin.String, kotlin.Int, kotlin.Int, kotlin.Int, kotlin.Int, kotlin.String, kotlin.Int, io.ktor.network.tls.extensions.HashAlgorithm, io.ktor.network.tls.extensions.SignatureAlgorithm)/macStrength">macStrength</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls.CipherSuite$<init>(kotlin.Short, kotlin.String, kotlin.String, io.ktor.network.tls.SecretExchangeType, kotlin.String, kotlin.Int, kotlin.Int, kotlin.Int, kotlin.Int, kotlin.String, kotlin.Int, io.ktor.network.tls.extensions.HashAlgorithm, io.ktor.network.tls.extensions.SignatureAlgorithm)/hash">hash</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.network.tls.extensions/-hash-algorithm/index.html"><span class="identifier">HashAlgorithm</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls.CipherSuite$<init>(kotlin.Short, kotlin.String, kotlin.String, io.ktor.network.tls.SecretExchangeType, kotlin.String, kotlin.Int, kotlin.Int, kotlin.Int, kotlin.Int, kotlin.String, kotlin.Int, io.ktor.network.tls.extensions.HashAlgorithm, io.ktor.network.tls.extensions.SignatureAlgorithm)/signatureAlgorithm">signatureAlgorithm</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.network.tls.extensions/-signature-algorithm/index.html"><span class="identifier">SignatureAlgorithm</span></a><span class="symbol">)</span></code></div>

Represents a TLS cipher suite


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="cipher-tag-size-in-bytes.html">cipherTagSizeInBytes</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">cipherTagSizeInBytes</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

tag size in bytes


</td>
</tr>
<tr>
<td markdown="1">

<a href="code.html">code</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">code</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-short/index.html"><span class="identifier">Short</span></a></code></div>

numeric cipher suite code


</td>
</tr>
<tr>
<td markdown="1">

<a href="exchange-type.html">exchangeType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">exchangeType</span><span class="symbol">: </span><a href="../-secret-exchange-type/index.html"><span class="identifier">SecretExchangeType</span></a></code></div>

secret exchange type (ECDHE or RSA)


</td>
</tr>
<tr>
<td markdown="1">

<a href="fixed-iv-length.html">fixedIvLength</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">fixedIvLength</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

fixed input vector length in bytes


</td>
</tr>
<tr>
<td markdown="1">

<a href="hash.html">hash</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">hash</span><span class="symbol">: </span><a href="../../io.ktor.network.tls.extensions/-hash-algorithm/index.html"><span class="identifier">HashAlgorithm</span></a></code></div>

algorithm


</td>
</tr>
<tr>
<td markdown="1">

<a href="iv-length.html">ivLength</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">ivLength</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

input vector length in bytes


</td>
</tr>
<tr>
<td markdown="1">

<a href="jdk-cipher-name.html">jdkCipherName</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">jdkCipherName</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

for this suite that is used in JDK


</td>
</tr>
<tr>
<td markdown="1">

<a href="key-strength.html">keyStrength</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">keyStrength</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

in bits


</td>
</tr>
<tr>
<td markdown="1">

<a href="key-strength-in-bytes.html">keyStrengthInBytes</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">keyStrengthInBytes</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

key strength in bytes ( = <code>[keyStrength] / 8</code>)


</td>
</tr>
<tr>
<td markdown="1">

<a href="mac-name.html">macName</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">macName</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

message authentication algorithm name


</td>
</tr>
<tr>
<td markdown="1">

<a href="mac-strength.html">macStrength</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">macStrength</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

message authentication algorithm strength in bits


</td>
</tr>
<tr>
<td markdown="1">

<a href="mac-strength-in-bytes.html">macStrengthInBytes</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">macStrengthInBytes</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

message authentication algorithm strength in bytes ( = <code>[macStrength] / 8</code>)


</td>
</tr>
<tr>
<td markdown="1">

<a href="name.html">name</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">name</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

cipher suite name


</td>
</tr>
<tr>
<td markdown="1">

<a href="open-s-s-l-name.html">openSSLName</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">openSSLName</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

for this suite that is used in openssl


</td>
</tr>
<tr>
<td markdown="1">

<a href="signature-algorithm.html">signatureAlgorithm</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">signatureAlgorithm</span><span class="symbol">: </span><a href="../../io.ktor.network.tls.extensions/-signature-algorithm/index.html"><span class="identifier">SignatureAlgorithm</span></a></code></div>

</td>
</tr>
</tbody>
</table>
