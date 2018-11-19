---
title: DigestCredential - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth</a> / <a href="./index.html">DigestCredential</a></div>

# DigestCredential

<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">DigestCredential</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-credential.html"><span class="identifier">Credential</span></a></code></div>

Represents Digest credentials

For details see <a href="http://www.faqs.org/rfcs/rfc2617.html">RFC2617</a>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">DigestCredential</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.DigestCredential$<init>(kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String)/realm">realm</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.DigestCredential$<init>(kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String)/userName">userName</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.DigestCredential$<init>(kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String)/digestUri">digestUri</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.DigestCredential$<init>(kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String)/nonce">nonce</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.DigestCredential$<init>(kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String)/opaque">opaque</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.DigestCredential$<init>(kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String)/nonceCount">nonceCount</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.DigestCredential$<init>(kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String)/algorithm">algorithm</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.DigestCredential$<init>(kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String)/response">response</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.DigestCredential$<init>(kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String)/cnonce">cnonce</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.DigestCredential$<init>(kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String, kotlin.String)/qop">qop</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><span class="symbol">)</span></code></div>

Represents Digest credentials


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="algorithm.html">algorithm</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">algorithm</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

digest algorithm name


</td>
</tr>
<tr>
<td markdown="1">

<a href="cnonce.html">cnonce</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">cnonce</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

must be sent if <a href="qop.html">qop</a> is specified and must be <code>null</code> otherwise. Should be passed through unchanged.


</td>
</tr>
<tr>
<td markdown="1">

<a href="digest-uri.html">digestUri</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">digestUri</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

may be an absolute URI or <code>*</code>


</td>
</tr>
<tr>
<td markdown="1">

<a href="nonce.html">nonce</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">nonce</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="nonce-count.html">nonceCount</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">nonceCount</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

must be sent if <a href="qop.html">qop</a> is specified and must be <code>null</code> otherwise


</td>
</tr>
<tr>
<td markdown="1">

<a href="opaque.html">opaque</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">opaque</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

a string of data that is passed through unchanged


</td>
</tr>
<tr>
<td markdown="1">

<a href="qop.html">qop</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">qop</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

quality of protection sign


</td>
</tr>
<tr>
<td markdown="1">

<a href="realm.html">realm</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">realm</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

digest auth realm


</td>
</tr>
<tr>
<td markdown="1">

<a href="response.html">response</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">response</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

consist of 32 hex digits (digested password and other fields as per RFC)


</td>
</tr>
<tr>
<td markdown="1">

<a href="user-name.html">userName</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">userName</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../expected-digest.html">expectedDigest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">DigestCredential</span></a><span class="symbol">.</span><span class="identifier">expectedDigest</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$expectedDigest(io.ktor.auth.DigestCredential, io.ktor.http.HttpMethod, java.security.MessageDigest, kotlin.ByteArray)/method">method</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-http-method/index.html"><span class="identifier">HttpMethod</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$expectedDigest(io.ktor.auth.DigestCredential, io.ktor.http.HttpMethod, java.security.MessageDigest, kotlin.ByteArray)/digester">digester</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/security/MessageDigest.html"><span class="identifier">MessageDigest</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$expectedDigest(io.ktor.auth.DigestCredential, io.ktor.http.HttpMethod, java.security.MessageDigest, kotlin.ByteArray)/userNameRealmPasswordDigest">userNameRealmPasswordDigest</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a></code></div>

Calculates expected digest bytes for this <a href="./index.md">DigestCredential</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../verifier.html">verifier</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="./index.md"><span class="identifier">DigestCredential</span></a><span class="symbol">.</span><span class="identifier">verifier</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$verifier(io.ktor.auth.DigestCredential, io.ktor.http.HttpMethod, java.security.MessageDigest, kotlin.SuspendFunction2((kotlin.String, , kotlin.ByteArray)))/method">method</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-http-method/index.html"><span class="identifier">HttpMethod</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$verifier(io.ktor.auth.DigestCredential, io.ktor.http.HttpMethod, java.security.MessageDigest, kotlin.SuspendFunction2((kotlin.String, , kotlin.ByteArray)))/digester">digester</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/security/MessageDigest.html"><span class="identifier">MessageDigest</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$verifier(io.ktor.auth.DigestCredential, io.ktor.http.HttpMethod, java.security.MessageDigest, kotlin.SuspendFunction2((kotlin.String, , kotlin.ByteArray)))/userNameRealmPasswordDigest">userNameRealmPasswordDigest</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Verifies credentials are valid for given <a href="../verifier.html#io.ktor.auth$verifier(io.ktor.auth.DigestCredential, io.ktor.http.HttpMethod, java.security.MessageDigest, kotlin.SuspendFunction2((kotlin.String, , kotlin.ByteArray)))/method">method</a> and <a href="../verifier.html#io.ktor.auth$verifier(io.ktor.auth.DigestCredential, io.ktor.http.HttpMethod, java.security.MessageDigest, kotlin.SuspendFunction2((kotlin.String, , kotlin.ByteArray)))/digester">digester</a> and <a href="../verifier.html#io.ktor.auth$verifier(io.ktor.auth.DigestCredential, io.ktor.http.HttpMethod, java.security.MessageDigest, kotlin.SuspendFunction2((kotlin.String, , kotlin.ByteArray)))/userNameRealmPasswordDigest">userNameRealmPasswordDigest</a>


</td>
</tr>
</tbody>
</table>
