---
title: io.ktor.network.tls.certificates - 
layout: api
---



## Package io.ktor.network.tls.certificates

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-certificate-builder/index.html">CertificateBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">CertificateBuilder</span></code></div>

Builder for certificate


</td>
</tr>
<tr>
<td markdown="1">

<a href="-key-store-builder/index.html">KeyStoreBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">KeyStoreBuilder</span></code></div>

Builder for key store


</td>
</tr>
</tbody>
</table>

### Extensions for External Classes

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="java.security.-key-store/index.html">java.security.KeyStore</a>


</td>
<td markdown="1">

</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="build-key-store.html">buildKeyStore</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">buildKeyStore</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls.certificates$buildKeyStore(kotlin.Function1((io.ktor.network.tls.certificates.KeyStoreBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="-key-store-builder/index.html"><span class="identifier">KeyStoreBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/security/KeyStore.html"><span class="identifier">KeyStore</span></a></code></div>

Create a keystore and configure it in <a href="build-key-store.html#io.ktor.network.tls.certificates$buildKeyStore(kotlin.Function1((io.ktor.network.tls.certificates.KeyStoreBuilder, kotlin.Unit)))/block">block</a> function


</td>
</tr>
<tr>
<td markdown="1">

<a href="generate-certificate.html">generateCertificate</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">generateCertificate</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls.certificates$generateCertificate(java.io.File, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.Int)/file">file</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/File.html"><span class="identifier">File</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls.certificates$generateCertificate(java.io.File, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.Int)/algorithm">algorithm</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"SHA1withRSA"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls.certificates$generateCertificate(java.io.File, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.Int)/keyAlias">keyAlias</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"mykey"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls.certificates$generateCertificate(java.io.File, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.Int)/keyPassword">keyPassword</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"changeit"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls.certificates$generateCertificate(java.io.File, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.Int)/jksPassword">jksPassword</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;keyPassword<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls.certificates$generateCertificate(java.io.File, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.Int)/keySizeInBits">keySizeInBits</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;1024<br/><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/security/KeyStore.html"><span class="identifier">KeyStore</span></a></code></div>

Generates simple self-signed certificate with <a href="generate-certificate.html#io.ktor.network.tls.certificates$generateCertificate(java.io.File, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.Int)/keyAlias">keyAlias</a> name, private key is encrypted with <a href="generate-certificate.html#io.ktor.network.tls.certificates$generateCertificate(java.io.File, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.Int)/keyPassword">keyPassword</a>,
and a JKS keystore to hold it in <a href="generate-certificate.html#io.ktor.network.tls.certificates$generateCertificate(java.io.File, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.Int)/file">file</a> with <a href="generate-certificate.html#io.ktor.network.tls.certificates$generateCertificate(java.io.File, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.Int)/jksPassword">jksPassword</a>.


</td>
</tr>
</tbody>
</table>
